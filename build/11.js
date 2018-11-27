webpackJsonp([11],{

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_page__ = __webpack_require__(566);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login_page__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_page__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.page.module.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth_service__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(alertCtrl, authService, formBuilder, loadingCtrl, navCtrl) {
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.loginForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(6)]],
        });
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        var loading = this.showLoading("Please wait...");
        this.authService.loginWithEmail(this.loginForm.value)
            .then(function (isLogged) {
            if (isLogged) {
                _this.navCtrl.setRoot('TabsPage');
                loading.dismiss();
            }
            else {
                loading.dismiss();
                _this.showAlert('Authentication Failed', 'User or password invalid');
            }
        }).catch(function (error) {
            _this.showAlert('Authentication Failed', error);
            loading.dismiss();
        });
    };
    LoginPage.prototype.showLoading = function (message) {
        var loading = this.loadingCtrl.create({
            content: message
        });
        loading.present();
        return loading;
    };
    LoginPage.prototype.showAlert = function (title, message) {
        this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    LoginPage.prototype.goRegister = function () {
        this.navCtrl.push('RegisterPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\EliasdeCarvalhoJunio\Desktop\ProjetoAds\myApp\src\pages\login\login.page.html"*/'<ion-content text-center>\n\n  <ion-grid>\n\n    <ion-avatar>\n\n      <ion-icon name="contact"></ion-icon>\n\n    </ion-avatar>\n\n    <form [formGroup]="loginForm" (ngSubmit)="login(); $event.preventDefault()">\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label stacked>E-mail</ion-label>\n\n          <ion-input formControlName="email" email></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label stacked>Senha</ion-label>\n\n          <ion-input type="password" formControlName="password"></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n      <button ion-button outline block type="submit" [disabled]="loginForm.invalid">\n\n          Login\n\n      </button>\n\n    </form>\n\n    <button ion-button outline block (click)="goRegister()">\n\n        Sign up\n\n    </button>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\EliasdeCarvalhoJunio\Desktop\ProjetoAds\myApp\src\pages\login\login.page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.page.js.map

/***/ })

});
//# sourceMappingURL=11.js.map