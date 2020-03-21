(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/content/about-me/about-me.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/content/about-me/about-me.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about-me\" id=\"about\">\n  <div class=\"container\">\n    <a [routerLink]=\"['']\" class=\"prev-btn\"><i class=\"fa fa-chevron-left fa-2x\"></i></a>\n    <a [routerLink]=\"['/projects']\" class=\"next-btn\"><i class=\"fa fa-chevron-right fa-2x\"></i></a>\n    <div class=\"row text-center justify-content-center\">\n      <div class=\"col-md-6 pt-5\">\n        <h1>about me</h1>\n        <p class=\"mt-5\" style=\"text-align: justify;\">Hi, I'm a web development enthusiast that is armed with experience,\n          learning,\n          and passion. </p>\n        <p style=\"text-align: justify;\">I am an aspiring full-stack developer currently living in Muntinlupa City.\n          Professional experienced in making\n          RESTful API and Angular application. Familiar with object-oriented programming and MVC and also experienced in\n          making Spring boot and Angular application.\n\n          I use HTML, CSS, JAVASCRIPT often, usually with JQUERY and BOOTSTRAP with a foundation in problem-solving and\n          web layout design.\n\n          Feel free to take a look at my projects on the Projects page.</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/content/table-of-contents/table-of-contents.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/content/table-of-contents/table-of-contents.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-of-contents\" id=\"content-list\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-12 text-center\">\n        <h1 class=\"pt-5\" style=\"text-transform: uppercase;\">Table of contents</h1>\n      </div>\n\n      <div class=\"col-md-5\">\n        <ul class=\"content-list mt-4\">\n          <li> <a href=\"\">About me</a> </li>\n          <li> <a href=\"\">Services</a> </li>\n          <li> <a href=\"\">Projects</a> </li>\n          <li><a href=\"\">Contact</a> </li>\n        </ul>\n      </div>\n\n    </div>\n    <a [routerLink]=\"['about']\" class=\"next-btn\"><i class=\"fa fa-chevron-right fa-2x\"></i></a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main-component/main-component.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main-component/main-component.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\" id=\"main\">\n  <div class=\"profile-container\">\n    <div class=\"container\" style=\"height: 100vh;\">\n      <div class=\"row text-center justify-content-center\">\n        <div class=\"col-md-12 pt-4\">\n          <img class=\"rounded-circle\" src=\"../../assets/img/Logo2.jpg\" alt=\"\">\n          <h1 class=\"name pt-2\">RENZO R. CRETECIO</h1>\n          <div class=\"align-items-center\" id=\"profession\">\n            <h5 class=\"title-1\">FRONT-END DEVELOPER</h5>\n            <h5 class=\"title-2\">BACK-END DEVELOPER</h5>\n            <h5 class=\"title-3\">WEB DESIGNER</h5>\n          </div>\n        </div>\n\n        <div class=\"col-md-12 pt-4\">\n          <div class=\"intro mt-3\">\n\n            <div class=\"custom-list\">\n              <div class=\"icon\">\n                <i class=\"fas fa-graduation-cap fa-1x\"></i>\n              </div>\n              <p class=\"text-left px-4\">B.S. in Computer Science (2014-2018)</p>\n            </div>\n            <div class=\"custom-list\">\n              <div class=\"icon\">\n                <i class=\"fas fa-school fa-1x\"></i>\n              </div>\n              <p class=\"text-left px-4\">Pamantasan ng Lungsod ng Muntinlupa</p>\n            </div>\n\n            <div class=\"custom-list\">\n              <div class=\"icon\">\n                <i class=\"fas fa-home fa-1x\"></i>\n              </div>\n              <p class=\"text-left px-4\">Lives in Muntinlupa City</p>\n            </div>\n\n          </div>\n        </div>\n\n        <div class=\"col-md-10 pt-5\">\n          <ul class=\"links\">\n            <li><a href=\"\"><i class=\"fab fa-github-alt fa-2x\"></i></a></li>\n            <li><a href=\"\"><i class=\"fab fa-facebook-messenger fa-2x\"></i></a></li>\n            <li><a href=\"\"><i class=\"fab fa-instagram fa-2x\"></i></a></li>\n            <li><a href=\"\"><i class=\"fab fa-linkedin-in fa-2x\"></i></a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"content-container\" [@routeAnimations]=\"o && o.activatedRouteData \n  && o.activatedRouteData['animation']\">\n    <router-outlet #o=\"outlet\"></router-outlet>\n  </div>\n  <!-- <div class=\"content-container\">\n    <router-outlet></router-outlet>\n  </div> -->\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/projects/projects.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/projects/projects.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"recent-projects\" id=\"projects\">\n  <div class=\"container\">\n    <a [routerLink]=\"['/about']\" class=\"prev-btn\"><i class=\"fa fa-chevron-left fa-2x\"></i></a>\n    <a [routerLink]=\"['']\" class=\"next-btn\"><i class=\"fa fa-chevron-right fa-2x\"></i></a>\n    <div class=\"row\">\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_component_main_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-component/main-component.component */ "./src/app/main-component/main-component.component.ts");
/* harmony import */ var _content_table_of_contents_table_of_contents_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/table-of-contents/table-of-contents.component */ "./src/app/content/table-of-contents/table-of-contents.component.ts");
/* harmony import */ var _content_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content/about-me/about-me.component */ "./src/app/content/about-me/about-me.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");








var routes = [
    {
        path: '', component: _main_component_main_component_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"], children: [
            { path: '', component: _content_table_of_contents_table_of_contents_component__WEBPACK_IMPORTED_MODULE_5__["TableOfContentsComponent"], data: { animation: 'first-page' } },
            { path: 'about', component: _content_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_6__["AboutMeComponent"], data: { animation: 'second-page' } },
            { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"], data: { animation: 'third-page' } }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    anchorScrolling: "enabled", onSameUrlNavigation: 'reload',
                    scrollPositionRestoration: 'enabled'
                }),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'myportfolio-v3';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _main_component_main_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-component/main-component.component */ "./src/app/main-component/main-component.component.ts");
/* harmony import */ var _content_table_of_contents_table_of_contents_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content/table-of-contents/table-of-contents.component */ "./src/app/content/table-of-contents/table-of-contents.component.ts");
/* harmony import */ var _content_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./content/about-me/about-me.component */ "./src/app/content/about-me/about-me.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _main_component_main_component_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
                _content_table_of_contents_table_of_contents_component__WEBPACK_IMPORTED_MODULE_7__["TableOfContentsComponent"],
                _content_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_8__["AboutMeComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/content/about-me/about-me.component.css":
/*!*********************************************************!*\
  !*** ./src/app/content/about-me/about-me.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#about {\r\n  color: #1c1d24;\r\n}\r\n\r\n.about-me p {\r\n  font-size: 18px;\r\n}\r\n\r\n.next-btn {\r\n  position: fixed;\r\n  width: 60px;\r\n  height: 60px;\r\n  bottom: 50%;\r\n  right: 40px;\r\n  background-color: #EA2340;\r\n  color: #FFF;\r\n  border-radius: 50px;\r\n  text-align: center;\r\n  box-shadow: 2px 2px 3px #999;\r\n}\r\n\r\n.prev-btn {\r\n  position: fixed;\r\n  width: 60px;\r\n  height: 60px;\r\n  bottom: 50%;\r\n  background-color: #EA2340;\r\n  color: #FFF;\r\n  border-radius: 50px;\r\n  text-align: center;\r\n  box-shadow: 2px 2px 3px #999;\r\n}\r\n\r\n.next-btn i,\r\n.prev-btn i {\r\n  margin-top: 14px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9hYm91dC1tZS9hYm91dC1tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtBQUM5Qjs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L2Fib3V0LW1lL2Fib3V0LW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYWJvdXQge1xyXG4gIGNvbG9yOiAjMWMxZDI0O1xyXG59XHJcblxyXG4uYWJvdXQtbWUgcCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4ubmV4dC1idG4ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYm90dG9tOiA1MCU7XHJcbiAgcmlnaHQ6IDQwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VBMjM0MDtcclxuICBjb2xvcjogI0ZGRjtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDNweCAjOTk5O1xyXG59XHJcblxyXG4ucHJldi1idG4ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYm90dG9tOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VBMjM0MDtcclxuICBjb2xvcjogI0ZGRjtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDNweCAjOTk5O1xyXG59XHJcblxyXG4ubmV4dC1idG4gaSxcclxuLnByZXYtYnRuIGkge1xyXG4gIG1hcmdpbi10b3A6IDE0cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/content/about-me/about-me.component.ts":
/*!********************************************************!*\
  !*** ./src/app/content/about-me/about-me.component.ts ***!
  \********************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutMeComponent = /** @class */ (function () {
    function AboutMeComponent() {
    }
    AboutMeComponent.prototype.ngOnInit = function () {
    };
    AboutMeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-me',
            template: __webpack_require__(/*! raw-loader!./about-me.component.html */ "./node_modules/raw-loader/index.js!./src/app/content/about-me/about-me.component.html"),
            styles: [__webpack_require__(/*! ./about-me.component.css */ "./src/app/content/about-me/about-me.component.css")]
        })
    ], AboutMeComponent);
    return AboutMeComponent;
}());



/***/ }),

/***/ "./src/app/content/table-of-contents/table-of-contents.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/content/table-of-contents/table-of-contents.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content-list {\r\n  color: #1C1D24;\r\n}\r\n\r\n.content-list {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: start;\r\n          justify-content: flex-start;\r\n  padding: 0;\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-weight: 400;\r\n}\r\n\r\n.content-list li {\r\n  margin: 1em;\r\n  font-size: 2vw;\r\n}\r\n\r\n.content-list li a {\r\n  font-size: 2vw;\r\n  color: #EA2340;\r\n}\r\n\r\n.next-btn {\r\n  position: fixed;\r\n  width: 60px;\r\n  height: 60px;\r\n  bottom: 50%;\r\n  right: 40px;\r\n  background-color: #EA2340;\r\n  color: #FFF;\r\n  border-radius: 50px;\r\n  text-align: center;\r\n  box-shadow: 2px 2px 3px #999;\r\n}\r\n\r\n.next-btn i {\r\n  margin-top: 14px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC90YWJsZS1vZi1jb250ZW50cy90YWJsZS1vZi1jb250ZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHVCQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsVUFBVTtFQUNWLG9DQUFvQztFQUNwQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC90YWJsZS1vZi1jb250ZW50cy90YWJsZS1vZi1jb250ZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRlbnQtbGlzdCB7XHJcbiAgY29sb3I6ICMxQzFEMjQ7XHJcbn1cclxuXHJcbi5jb250ZW50LWxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLmNvbnRlbnQtbGlzdCBsaSB7XHJcbiAgbWFyZ2luOiAxZW07XHJcbiAgZm9udC1zaXplOiAydnc7XHJcbn1cclxuXHJcbi5jb250ZW50LWxpc3QgbGkgYSB7XHJcbiAgZm9udC1zaXplOiAydnc7XHJcbiAgY29sb3I6ICNFQTIzNDA7XHJcbn1cclxuXHJcbi5uZXh0LWJ0biB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBib3R0b206IDUwJTtcclxuICByaWdodDogNDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUEyMzQwO1xyXG4gIGNvbG9yOiAjRkZGO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggM3B4ICM5OTk7XHJcbn1cclxuXHJcbi5uZXh0LWJ0biBpIHtcclxuICBtYXJnaW4tdG9wOiAxNHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/content/table-of-contents/table-of-contents.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/content/table-of-contents/table-of-contents.component.ts ***!
  \**************************************************************************/
/*! exports provided: TableOfContentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableOfContentsComponent", function() { return TableOfContentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TableOfContentsComponent = /** @class */ (function () {
    function TableOfContentsComponent() {
    }
    TableOfContentsComponent.prototype.ngOnInit = function () {
    };
    TableOfContentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table-of-contents',
            template: __webpack_require__(/*! raw-loader!./table-of-contents.component.html */ "./node_modules/raw-loader/index.js!./src/app/content/table-of-contents/table-of-contents.component.html"),
            styles: [__webpack_require__(/*! ./table-of-contents.component.css */ "./src/app/content/table-of-contents/table-of-contents.component.css")]
        })
    ], TableOfContentsComponent);
    return TableOfContentsComponent;
}());



/***/ }),

/***/ "./src/app/main-component/main-component.component.css":
/*!*************************************************************!*\
  !*** ./src/app/main-component/main-component.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main {\r\n  height: 100vh;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  color: #F5EEE6;\r\n}\r\n\r\n.profile-container {\r\n  width: 30%;\r\n  height: 100vh;\r\n  background-color: #1C1D24;\r\n  z-index: 1;\r\n  overflow: hidden;\r\n}\r\n\r\n.name {\r\n  font-size: 3vw;\r\n  font-family: \"Blinker\", sans-serif;\r\n  font-weight: 100;\r\n}\r\n\r\n#profession {\r\n  position: relative;\r\n  height: 2em;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n}\r\n\r\n#profession h5 {\r\n  position: absolute;\r\n  font-size: 1.5vw;\r\n  -webkit-animation-duration: 10s;\r\n          animation-duration: 10s;\r\n  -webkit-animation-timing-function: ease-in-out;\r\n          animation-timing-function: ease-in-out;\r\n  -webkit-animation-iteration-count: infinite;\r\n          animation-iteration-count: infinite;\r\n}\r\n\r\n.title-1 {\r\n  -webkit-animation-name: anim-1;\r\n          animation-name: anim-1;\r\n}\r\n\r\n.title-2 {\r\n  -webkit-animation-name: anim-2;\r\n          animation-name: anim-2;\r\n}\r\n\r\n.title-3 {\r\n  -webkit-animation-name: anim-3;\r\n          animation-name: anim-3;\r\n}\r\n\r\n@-webkit-keyframes anim-1 {\r\n\r\n  0%,\r\n  8.3% {\r\n    opacity: 0;\r\n  }\r\n\r\n  8.3%,\r\n  25% {\r\n    opacity: 1;\r\n  }\r\n\r\n  33.33%,\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes anim-1 {\r\n\r\n  0%,\r\n  8.3% {\r\n    opacity: 0;\r\n  }\r\n\r\n  8.3%,\r\n  25% {\r\n    opacity: 1;\r\n  }\r\n\r\n  33.33%,\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes anim-2 {\r\n\r\n  0%,\r\n  33.33% {\r\n    opacity: 0;\r\n  }\r\n\r\n  41.63%,\r\n  58.29% {\r\n    opacity: 1;\r\n  }\r\n\r\n  66.66%,\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes anim-2 {\r\n\r\n  0%,\r\n  33.33% {\r\n    opacity: 0;\r\n  }\r\n\r\n  41.63%,\r\n  58.29% {\r\n    opacity: 1;\r\n  }\r\n\r\n  66.66%,\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes anim-3 {\r\n\r\n  0%,\r\n  66.66% {\r\n    opacity: 0;\r\n  }\r\n\r\n  74.96%,\r\n  91.62% {\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes anim-3 {\r\n\r\n  0%,\r\n  66.66% {\r\n    opacity: 0;\r\n  }\r\n\r\n  74.96%,\r\n  91.62% {\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.icon {\r\n  position: absolute;\r\n  left: 0;\r\n  padding-left: 0.5rem;\r\n  color: #EA2340;\r\n\r\n}\r\n\r\n.links {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  padding: 0;\r\n\r\n}\r\n\r\n.links li {\r\n  list-style: none;\r\n}\r\n\r\n.links li a {\r\n  color: #EA2340;\r\n}\r\n\r\n.content-container {\r\n  width: 70%;\r\n  height: 100vh;\r\n  background-color: #ffffff;\r\n  overflow: hidden;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1jb21wb25lbnQvbWFpbi1jb21wb25lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsVUFBVTtFQUNWLFNBQVM7RUFDVCxvQkFBYTtFQUFiLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsK0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qiw4Q0FBc0M7VUFBdEMsc0NBQXNDO0VBQ3RDLDJDQUFtQztVQUFuQyxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSw4QkFBc0I7VUFBdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsOEJBQXNCO1VBQXRCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDhCQUFzQjtVQUF0QixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUU7O0lBRUUsVUFBVTtFQUNaOztFQUVBOztJQUVFLFVBQVU7RUFDWjs7RUFFQTs7SUFFRSxVQUFVO0VBQ1o7QUFDRjs7QUFoQkE7O0VBRUU7O0lBRUUsVUFBVTtFQUNaOztFQUVBOztJQUVFLFVBQVU7RUFDWjs7RUFFQTs7SUFFRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTs7RUFFRTs7SUFFRSxVQUFVO0VBQ1o7O0VBRUE7O0lBRUUsVUFBVTtFQUNaOztFQUVBOztJQUVFLFVBQVU7RUFDWjtBQUNGOztBQWhCQTs7RUFFRTs7SUFFRSxVQUFVO0VBQ1o7O0VBRUE7O0lBRUUsVUFBVTtFQUNaOztFQUVBOztJQUVFLFVBQVU7RUFDWjtBQUNGOztBQUVBOztFQUVFOztJQUVFLFVBQVU7RUFDWjs7RUFFQTs7SUFFRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFmQTs7RUFFRTs7SUFFRSxVQUFVO0VBQ1o7O0VBRUE7O0lBRUUsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLG9CQUFvQjtFQUNwQixjQUFjOztBQUVoQjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixVQUFVOztBQUVaOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL21haW4tY29tcG9uZW50L21haW4tY29tcG9uZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbiB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGNvbG9yOiAjRjVFRUU2O1xyXG59XHJcblxyXG4ucHJvZmlsZS1jb250YWluZXIge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUMxRDI0O1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm5hbWUge1xyXG4gIGZvbnQtc2l6ZTogM3Z3O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkJsaW5rZXJcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcblxyXG4jcHJvZmVzc2lvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuI3Byb2Zlc3Npb24gaDUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmb250LXNpemU6IDEuNXZ3O1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTBzO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG59XHJcblxyXG4udGl0bGUtMSB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW0tMTtcclxufVxyXG5cclxuLnRpdGxlLTIge1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltLTI7XHJcbn1cclxuXHJcbi50aXRsZS0zIHtcclxuICBhbmltYXRpb24tbmFtZTogYW5pbS0zO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW0tMSB7XHJcblxyXG4gIDAlLFxyXG4gIDguMyUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIDguMyUsXHJcbiAgMjUlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICAzMy4zMyUsXHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltLTIge1xyXG5cclxuICAwJSxcclxuICAzMy4zMyUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIDQxLjYzJSxcclxuICA1OC4yOSUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIDY2LjY2JSxcclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW0tMyB7XHJcblxyXG4gIDAlLFxyXG4gIDY2LjY2JSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgNzQuOTYlLFxyXG4gIDkxLjYyJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLmljb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG4gIGNvbG9yOiAjRUEyMzQwO1xyXG5cclxufVxyXG5cclxuLmxpbmtzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIHBhZGRpbmc6IDA7XHJcblxyXG59XHJcblxyXG4ubGlua3MgbGkge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5saW5rcyBsaSBhIHtcclxuICBjb2xvcjogI0VBMjM0MDtcclxufVxyXG5cclxuLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICB3aWR0aDogNzAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/main-component/main-component.component.ts":
/*!************************************************************!*\
  !*** ./src/app/main-component/main-component.component.ts ***!
  \************************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../route-animation */ "./src/app/route-animation.ts");



var MainComponent = /** @class */ (function () {
    function MainComponent() {
        this.displayTextH1 = "";
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-component',
            template: __webpack_require__(/*! raw-loader!./main-component.component.html */ "./node_modules/raw-loader/index.js!./src/app/main-component/main-component.component.html"),
            animations: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]],
            styles: [__webpack_require__(/*! ./main-component.component.css */ "./src/app/main-component/main-component.component.css")]
        })
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".next-btn {\r\n  position: fixed;\r\n  width: 60px;\r\n  height: 60px;\r\n  bottom: 50%;\r\n  right: 40px;\r\n  background-color: #EA2340;\r\n  color: #FFF;\r\n  border-radius: 50px;\r\n  text-align: center;\r\n  box-shadow: 2px 2px 3px #999;\r\n}\r\n\r\n.prev-btn {\r\n  position: fixed;\r\n  width: 60px;\r\n  height: 60px;\r\n  bottom: 50%;\r\n  background-color: #EA2340;\r\n  color: #FFF;\r\n  border-radius: 50px;\r\n  text-align: center;\r\n  box-shadow: 2px 2px 3px #999;\r\n}\r\n\r\n.next-btn i,\r\n.prev-btn i {\r\n  margin-top: 14px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsNEJBQTRCO0FBQzlCOztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV4dC1idG4ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYm90dG9tOiA1MCU7XHJcbiAgcmlnaHQ6IDQwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VBMjM0MDtcclxuICBjb2xvcjogI0ZGRjtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDNweCAjOTk5O1xyXG59XHJcblxyXG4ucHJldi1idG4ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYm90dG9tOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VBMjM0MDtcclxuICBjb2xvcjogI0ZGRjtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDNweCAjOTk5O1xyXG59XHJcblxyXG4ubmV4dC1idG4gaSxcclxuLnByZXYtYnRuIGkge1xyXG4gIG1hcmdpbi10b3A6IDE0cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/index.js!./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        })
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/route-animation.ts":
/*!************************************!*\
  !*** ./src/app/route-animation.ts ***!
  \************************************/
/*! exports provided: slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

// export const fader = trigger('routeAnimation', [
//     transition('* <=> *', [
//         query(':enter, :leave', [
//             style({
//                 position: 'absolute',
//                 left: 0,
//                 width: '100%',
//                 opacity: 0,
//                 transform: 'scale(0) translateY(100%)',
//             })
//         ]),
//         query(':enter', [
//             animate('600ms ease',
//                 style({ opacity: 1, transform: 'scale(1) translateY(0)' })
//             )
//         ])
//     ]),
// ])
var slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'relative',
                left: 0,
                width: '100%',
                opacity: 0,
                transform: 'scale(0) translateY(100%)',
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1) translateY(0)' }))
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('Projects => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('first-page => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('second-page => third-page', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('second-page => first-page', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('Projects => Home', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
]);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Renzo\Desktop\myportfolio-v3\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map