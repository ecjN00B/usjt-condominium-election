webpackJsonp([12],{

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidatesProfilePageModule", function() { return CandidatesProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__candidates_profile_page__ = __webpack_require__(554);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CandidatesProfilePageModule = /** @class */ (function () {
    function CandidatesProfilePageModule() {
    }
    CandidatesProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__candidates_profile_page__["a" /* CandidatesProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__candidates_profile_page__["a" /* CandidatesProfilePage */]),
            ],
        })
    ], CandidatesProfilePageModule);
    return CandidatesProfilePageModule;
}());

//# sourceMappingURL=candidates-profile.page.module.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidatesProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CandidatesProfilePage = /** @class */ (function () {
    function CandidatesProfilePage(authService, navCtrl, navParams, platform) {
        var _this = this;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
        });
    }
    CandidatesProfilePage.prototype.ionViewCanEnter = function () {
        return this.authService.authenticated;
    };
    CandidatesProfilePage.prototype.ionViewDidLoad = function () {
        this.name = this.navParams.data.name;
        this.description = this.navParams.data.description;
        this.number = this.navParams.data.number;
    };
    CandidatesProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-candidates-profile',template:/*ion-inline-start:"C:\Users\EliasdeCarvalhoJunio\Desktop\ProjetoAds\myApp\src\pages\candidates-profile\candidates-profile.page.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Candidate #{{ number }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card>\n\n\n\n    <img src="./assets/imgs/author.jpg"/>\n\n\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        {{ name }}\n\n      </ion-card-title>\n\n      <p>\n\n        {{ description }}\n\n      </p>\n\n    </ion-card-content>\n\n\n\n    <ion-item>\n\n      <ion-icon name=\'star-outline\' item-start style="color: #d03e84"></ion-icon>\n\n      Favorites\n\n      <ion-badge item-end>9</ion-badge>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name=\'logo-whatsapp\' item-start style="color: #55acee"></ion-icon>\n\n      +55 (11) 99999-9999\n\n    </ion-item>\n\n\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\EliasdeCarvalhoJunio\Desktop\ProjetoAds\myApp\src\pages\candidates-profile\candidates-profile.page.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], CandidatesProfilePage);
    return CandidatesProfilePage;
}());

//# sourceMappingURL=candidates-profile.page.js.map

/***/ })

});
//# sourceMappingURL=12.js.map