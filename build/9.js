webpackJsonp([9],{

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_page__ = __webpack_require__(570);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tabs_page__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs_page__["a" /* TabsPage */])
            ],
        })
    ], TabsPageModule);
    return TabsPageModule;
}());

//# sourceMappingURL=tabs.page.module.js.map

/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = /** @class */ (function () {
    function TabsPage(authService, navParams) {
        this.authService = authService;
        this.navParams = navParams;
        this.etitulo = 'TitlePage';
        this.admin = 'AdminPage';
        this.candidates = 'CandidatesPage';
        this.charts = 'ChartsPage';
        this.home = 'HomePage';
    }
    TabsPage.prototype.ionViewCanEnter = function () {
        return this.authService.authenticated;
    };
    TabsPage.prototype.ionViewDidLoad = function () {
        this.currentUser = this.navParams.data.currentUser;
        console.log(this.currentUser);
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'tabs',template:/*ion-inline-start:"C:\Users\EliasdeCarvalhoJunio\Desktop\ProjetoAds\myApp\src\pages\tabs\tabs.page.html"*/'<ion-tabs>\n\n  <ion-tab [root]="home" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="candidates" tabTitle="Candidates" tabIcon="contacts"></ion-tab>\n\n  <ion-tab [root]="charts" tabTitle="Charts" tabIcon="stats"></ion-tab>\n\n  <ion-tab [root]="etitulo" tabTitle="E-Titulo" tabIcon="qr-scanner"></ion-tab>\n\n  <ion-tab [root]="admin" tabTitle="Admin" tabIcon="construct" *ngIf="currentUser && currentUser.access == 2"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"C:\Users\EliasdeCarvalhoJunio\Desktop\ProjetoAds\myApp\src\pages\tabs\tabs.page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.page.js.map

/***/ })

});
//# sourceMappingURL=9.js.map