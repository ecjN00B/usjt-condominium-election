webpackJsonp([7],{

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_page__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(519);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home_page__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home_page__["a" /* HomePage */])
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.page.module.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__custom_header_custom_header_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__generic_profile_generic_profile_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_bar_progress_bar_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__social_card_social_card_component__ = __webpack_require__(524);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__custom_header_custom_header_component__["a" /* CustomHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_3__generic_profile_generic_profile_component__["a" /* GenericProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_4__progress_bar_progress_bar_component__["a" /* ProgressBarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__social_card_social_card_component__["a" /* SocialCardComponent */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicModule */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__custom_header_custom_header_component__["a" /* CustomHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_3__generic_profile_generic_profile_component__["a" /* GenericProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_4__progress_bar_progress_bar_component__["a" /* ProgressBarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__social_card_social_card_component__["a" /* SocialCardComponent */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_component__ = __webpack_require__(521);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomHeaderComponent = /** @class */ (function (_super) {
    __extends(CustomHeaderComponent, _super);
    function CustomHeaderComponent(alertCtrl, app, authService, menuCtrl, navCtrl) {
        var _this = _super.call(this, alertCtrl, authService, menuCtrl, navCtrl) || this;
        _this.alertCtrl = alertCtrl;
        _this.app = app;
        _this.authService = authService;
        _this.menuCtrl = menuCtrl;
        _this.navCtrl = navCtrl;
        return _this;
    }
    CustomHeaderComponent.prototype.onHelp = function () {
        this.app.getRootNav().setRoot('TutorialPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CustomHeaderComponent.prototype, "title", void 0);
    CustomHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'custom-header',template:/*ion-inline-start:"C:\Users\EliasdeCarvalhoJunio\Desktop\ProjetoAds\myApp\src\components\custom-header\custom-header.component.html"*/'<ion-navbar color="dark">\n\n  <button ion-button icon-only menuToggle>\n\n    <ion-icon name="menu"></ion-icon>\n\n  </button>\n\n  <ion-title>\n\n    {{ title }}\n\n  </ion-title>\n\n  <ion-buttons end>\n\n    <button ion-button icon-only (click)="onHelp()">\n\n      <ion-icon name="help-circle"></ion-icon>\n\n    </button>\n\n    <button ion-button icon-only (click)="onLogout()">\n\n      <ion-icon name="exit"></ion-icon>\n\n    </button>\n\n  </ion-buttons>\n\n</ion-navbar>'/*ion-inline-end:"C:\Users\EliasdeCarvalhoJunio\Desktop\ProjetoAds\myApp\src\components\custom-header\custom-header.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], CustomHeaderComponent);
    return CustomHeaderComponent;
}(__WEBPACK_IMPORTED_MODULE_3__base_component__["a" /* BaseComponent */]));

//# sourceMappingURL=custom-header.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseComponent; });
var BaseComponent = /** @class */ (function () {
    function BaseComponent(alertCtrl, authService, menuCtrl, navCtrl) {
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
    }
    BaseComponent.prototype.ngOnInit = function () { };
    BaseComponent.prototype.onLogout = function () {
        var _this = this;
        this.alertCtrl.create({
            message: 'Do you want to quit?',
            buttons: [
                {
                    text: 'Yes',
                    handler: function () {
                        _this.authService.logout()
                            .then(function () {
                            _this.navCtrl.setRoot('LoginPage');
                        });
                    }
                },
                {
                    text: 'No'
                }
            ]
        }).present();
    };
    return BaseComponent;
}());

//# sourceMappingURL=base.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenericProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GenericProfileComponent = /** @class */ (function () {
    function GenericProfileComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    GenericProfileComponent.prototype.dismiss = function () {
        this.navCtrl.pop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GenericProfileComponent.prototype, "user", void 0);
    GenericProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'generic-profile',template:/*ion-inline-start:"C:\Users\EliasdeCarvalhoJunio\Desktop\ProjetoAds\myApp\src\components\generic-profile\generic-profile.component.html"*/'<ion-buttons start>\n\n    <button ion-button outline (click)="dismiss()">\n\n        <ion-icon name="arrow-round-back"></ion-icon>\n\n    </button>\n\n</ion-buttons>\n\n<div *ngIf="user">\n\n    <ion-avatar>\n\n        <img class="round" [src]="user.photo || \'../assets/imgs/no-photo.jpg\'">\n\n    </ion-avatar>\n\n    <h2 text-center>{{ user.name }}\n\n    <p text-center *ngIf="user.apt"> - #{{ user.apt }}</p>\n\n    <p text-center *ngIf="user.number"> - #{{ user.number }}</p>\n\n    </h2>\n\n    <p text-center *ngIf="user.username">@{{ user.username }}</p>\n\n    <p text-center *ngIf="user.email">{{ user.email }}</p>\n\n</div>'/*ion-inline-end:"C:\Users\EliasdeCarvalhoJunio\Desktop\ProjetoAds\myApp\src\components\generic-profile\generic-profile.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], GenericProfileComponent);
    return GenericProfileComponent;
}());

//# sourceMappingURL=generic-profile.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
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

var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], ProgressBarComponent.prototype, "progress", void 0);
    ProgressBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'progress-bar',template:/*ion-inline-start:"C:\Users\EliasdeCarvalhoJunio\Desktop\ProjetoAds\myApp\src\components\progress-bar\progress-bar.component.html"*/'<div class="progress-outer">\n\n  <div class="progress-inner" [style.width]="progress + \'%\'">\n\n    {{ progress }}%\n\n  </div>\n\n</div>'/*ion-inline-end:"C:\Users\EliasdeCarvalhoJunio\Desktop\ProjetoAds\myApp\src\components\progress-bar\progress-bar.component.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());

//# sourceMappingURL=progress-bar.component.js.map

/***/ }),

/***/ 524:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'social-card',template:/*ion-inline-start:"C:\Users\EliasdeCarvalhoJunio\Desktop\ProjetoAds\myApp\src\components\social-card\social-card.component.html"*/'<ion-card>\n\n\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="./assets/imgs/author.jpg">\n\n      </ion-avatar>\n\n      <h2>N00B</h2>\n\n      <p>November 5, 1955</p>\n\n    </ion-item>\n\n  \n\n    <img src="./assets/imgs/author.jpg">\n\n  \n\n    <ion-card-content>\n\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus tempus lectus, a varius est.</p>\n\n    </ion-card-content>\n\n  \n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button icon-start clear small>\n\n          <ion-icon name="thumbs-up"></ion-icon>\n\n          <div>12 Likes</div>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button icon-start clear small>\n\n          <ion-icon name="text"></ion-icon>\n\n          <div>4 Comments</div>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col center text-center>\n\n        <ion-note>\n\n          11h ago\n\n        </ion-note>\n\n      </ion-col>\n\n    </ion-row>\n\n  \n\n  </ion-card>'/*ion-inline-end:"C:\Users\EliasdeCarvalhoJunio\Desktop\ProjetoAds\myApp\src\components\social-card\social-card.component.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SocialCardComponent);
    return SocialCardComponent;
}());

//# sourceMappingURL=social-card.component.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user_service__ = __webpack_require__(157);
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
    function HomePage(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }
    HomePage.prototype.ionViewCanEnter = function () {
        return this.authService.authenticated;
    };
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\EliasdeCarvalhoJunio\Desktop\ProjetoAds\myApp\src\pages\home\home.page.html"*/'<ion-header>\n\n  <custom-header [title]="\'Home Page\'"></custom-header>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list no-lines>\n\n      <button ion-item *ngFor="let user of users | async" (click)="onSelectUser(user)">\n\n        {{ user.name }}\n\n      </button>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\EliasdeCarvalhoJunio\Desktop\ProjetoAds\myApp\src\pages\home\home.page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__providers_user_user_service__["a" /* UserService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.page.js.map

/***/ })

});
//# sourceMappingURL=7.js.map