webpackJsonp([7],{

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidatesProfilePageModule", function() { return CandidatesProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__candidates_profile_page__ = __webpack_require__(655);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__candidates_profile_page__["a" /* CandidatesProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__candidates_profile_page__["a" /* CandidatesProfilePage */]),
            ],
        })
    ], CandidatesProfilePageModule);
    return CandidatesProfilePageModule;
}());

//# sourceMappingURL=candidates-profile.page.module.js.map

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidatesProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
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
    function CandidatesProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CandidatesProfilePage.prototype.ionViewDidLoad = function () {
        this.name = this.navParams.data.name;
        this.description = this.navParams.data.description;
        this.sigla = this.navParams.data.sigla;
    };
    CandidatesProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-candidates-profile',template:/*ion-inline-start:"C:\Users\EliasdeCarvalhoJunio\Desktop\ProjetoAds\myApp\src\pages\candidates-profile\candidates-profile.page.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Candidate {{ sigla }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n\n    <img src="../assets/imgs/author.jpg"/>\n\n    <ion-card-content>\n      <ion-card-title>\n        {{ name }}\n      </ion-card-title>\n      <p>\n        {{ description }}\n      </p>\n    </ion-card-content>\n\n    <ion-item>\n      <ion-icon name=\'star-outline\' item-start style="color: #d03e84"></ion-icon>\n      Favorites\n      <ion-badge item-end>9</ion-badge>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'logo-whatsapp\' item-start style="color: #55acee"></ion-icon>\n      +55 (11) 99999-9999\n    </ion-item>\n\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\EliasdeCarvalhoJunio\Desktop\ProjetoAds\myApp\src\pages\candidates-profile\candidates-profile.page.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CandidatesProfilePage);
    return CandidatesProfilePage;
}());

//# sourceMappingURL=candidates-profile.page.js.map

/***/ })

});
//# sourceMappingURL=7.js.map