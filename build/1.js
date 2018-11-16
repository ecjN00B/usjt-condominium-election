webpackJsonp([1],{

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_page__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(516);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home_page__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home_page__["a" /* HomePage */])
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.page.module.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_header_custom_header_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__social_card_social_card_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__social_card_social_card_component__["a" /* SocialCardComponent */],
                __WEBPACK_IMPORTED_MODULE_1__custom_header_custom_header_component__["a" /* CustomHeaderComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__social_card_social_card_component__["a" /* SocialCardComponent */],
                __WEBPACK_IMPORTED_MODULE_1__custom_header_custom_header_component__["a" /* CustomHeaderComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomHeaderComponent = /** @class */ (function () {
    function CustomHeaderComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], CustomHeaderComponent.prototype, "title", void 0);
    CustomHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'custom-header',template:/*ion-inline-start:"C:\Users\EliasdeCarvalhoJunio\Desktop\ProjetoAds\myApp\src\components\custom-header\custom-header.component.html"*/'<ion-navbar color="dark">\n  <button ion-button icon-only menuToggle>\n    <ion-icon name="menu"></ion-icon>\n  </button>\n  <ion-title>\n    {{ title }}\n  </ion-title>\n</ion-navbar>'/*ion-inline-end:"C:\Users\EliasdeCarvalhoJunio\Desktop\ProjetoAds\myApp\src\components\custom-header\custom-header.component.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CustomHeaderComponent);
    return CustomHeaderComponent;
}());

//# sourceMappingURL=custom-header.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SocialCardComponent = /** @class */ (function () {
    function SocialCardComponent() {
    }
    SocialCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'social-card',template:/*ion-inline-start:"C:\Users\EliasdeCarvalhoJunio\Desktop\ProjetoAds\myApp\src\components\social-card\social-card.component.html"*/'<ion-card>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../assets/imgs/author.jpg">\n      </ion-avatar>\n      <h2>N00B</h2>\n      <p>November 5, 1955</p>\n    </ion-item>\n  \n    <img src="../assets/imgs/author.jpg">\n  \n    <ion-card-content>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus tempus lectus, a varius est.</p>\n    </ion-card-content>\n  \n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>12 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>4 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col center text-center>\n        <ion-note>\n          11h ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  \n  </ion-card>'/*ion-inline-end:"C:\Users\EliasdeCarvalhoJunio\Desktop\ProjetoAds\myApp\src\components\social-card\social-card.component.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SocialCardComponent);
    return SocialCardComponent;
}());

//# sourceMappingURL=social-card.component.js.map

/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_user_user_service__ = __webpack_require__(289);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(userService) {
        this.userService = userService;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.users = this.userService.users;
        this.users.subscribe(function (usersList) {
            console.log(usersList);
        });
    };
    HomePage.prototype.onSelectUser = function (user) {
        console.log(user);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\EliasdeCarvalhoJunio\Desktop\ProjetoAds\myApp\src\pages\home\home.page.html"*/'<ion-header>\n  <custom-header [title]="\'Home Page\'"></custom-header>\n</ion-header>\n\n<ion-content padding>\n  <ion-list no-lines>\n      <button ion-item *ngFor="let user of users | async" (click)="onSelectUser(user)">\n        {{ user.name }}\n      </button>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\EliasdeCarvalhoJunio\Desktop\ProjetoAds\myApp\src\pages\home\home.page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_user_user_service__["a" /* UserService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.page.js.map

/***/ })

});
//# sourceMappingURL=1.js.map