webpackJsonp([10],{

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_page__ = __webpack_require__(567);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register_page__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register_page__["a" /* RegisterPage */]),
            ]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.page.module.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_base_base_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_user_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(22);
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







var RegisterPage = /** @class */ (function (_super) {
    __extends(RegisterPage, _super);
    function RegisterPage(alertCtrl, authService, formBuilder, loadingCtrl, navCtrl, navParams, userService) {
        var _this = _super.call(this) || this;
        _this.alertCtrl = alertCtrl;
        _this.authService = authService;
        _this.formBuilder = formBuilder;
        _this.loadingCtrl = loadingCtrl;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.userService = userService;
        _this.signupForm = _this.formBuilder.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(4)]],
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            apt: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)]],
            repassword: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)]]
        });
        return _this;
    }
    RegisterPage.prototype.onSubmit = function () {
        var _this = this;
        var loading = this.showLoading("Registering...");
        var formUser = this.signupForm.value;
        var username = formUser.username;
        this.userService.userExists(username)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["first"])())
            .subscribe(function (userExists) {
            if (!userExists) {
                _this.authService.createAuthUser({
                    email: formUser.email,
                    password: formUser.password
                }).then(function (authUser) {
                    delete formUser.password;
                    delete formUser.repassword;
                    formUser.access = 1;
                    formUser.voted = false;
                    var uuid = authUser["user"].uid;
                    _this.userService.create(formUser, uuid)
                        .then(function () {
                        var alert = _this.showAlert('Successful', 'You have been registered.');
                        alert.onDidDismiss(function () {
                            _this.navCtrl.setRoot('TutorialPage');
                            loading.dismiss();
                        });
                    }).catch(function (error) {
                        loading.dismiss();
                        _this.showAlert("Register failed", error);
                    });
                }).catch(function (error) {
                    loading.dismiss();
                    _this.showAlert("Register failed", error);
                });
            }
            else {
                loading.dismiss();
                _this.showAlert("Register failed", "The username " + username + " is already in use");
            }
        });
    };
    RegisterPage.prototype.showLoading = function (message) {
        var loading = this.loadingCtrl.create({
            content: message
        });
        loading.present();
        return loading;
    };
    RegisterPage.prototype.showAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['Ok']
        });
        alert.present();
        return alert;
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\EliasdeCarvalhoJunio\Desktop\ProjetoAds\myApp\src\pages\register\register.page.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Register</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form [formGroup]="signupForm" (ngSubmit)="onSubmit(); $event.preventDefault()">\n\n    <ion-item>\n\n      <ion-icon name="person" item-left></ion-icon>\n\n      <ion-input placeholder="Nome" type="text" formControlName="name"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="at" item-left></ion-icon>\n\n      <ion-input placeholder="Username" type="text" formControlName="username"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="at" item-left></ion-icon>\n\n      <ion-input placeholder="Apt" type="text" formControlName="apt"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="mail" item-left></ion-icon>\n\n      <ion-input placeholder="E-mail" type="email" formControlName="email" email></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="lock" item-left></ion-icon>\n\n      <ion-input placeholder="Senha" type="password" formControlName="password"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="unlock" item-left></ion-icon>\n\n      <ion-input placeholder="Digite a senha novamente" type="password" formControlName="repassword"></ion-input>\n\n    </ion-item>\n\n    <br>\n\n    <button ion-button outline block type="submit" [disabled]="signupForm.invalid">\n\n      Registrar\n\n    </button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\EliasdeCarvalhoJunio\Desktop\ProjetoAds\myApp\src\pages\register\register.page.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_user_user_service__["a" /* UserService */]])
    ], RegisterPage);
    return RegisterPage;
}(__WEBPACK_IMPORTED_MODULE_4__providers_base_base_service__["a" /* BaseService */]));

//# sourceMappingURL=register.page.js.map

/***/ })

});
//# sourceMappingURL=10.js.map