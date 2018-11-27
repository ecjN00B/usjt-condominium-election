webpackJsonp([2],{

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePageModule", function() { return UserProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_profile_page__ = __webpack_require__(596);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var UserProfilePageModule = /** @class */ (function () {
    function UserProfilePageModule() {
    }
    UserProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__user_profile_page__["a" /* UserProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__user_profile_page__["a" /* UserProfilePage */])
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__["AngularFireStorage"],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]
            ]
        })
    ], UserProfilePageModule);
    return UserProfilePageModule;
}());

//# sourceMappingURL=user-profile.page.module.js.map

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

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(593));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi93cmFwcGVyL3NyYy9zdG9yYWdlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMkNBQXNDIn0=

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createStorageRef;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__task__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(17);


function createStorageRef(ref, scheduler) {
    return {
        getDownloadURL: function () { return scheduler.keepUnstableUntilFirst(scheduler.runOutsideAngular(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs__["from"])(scheduler.zone.runOutsideAngular(function () { return ref.getDownloadURL(); })))); },
        getMetadata: function () { return scheduler.keepUnstableUntilFirst(scheduler.runOutsideAngular(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs__["from"])(scheduler.zone.runOutsideAngular(function () { return ref.getMetadata(); })))); },
        delete: function () { return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs__["from"])(ref.delete()); },
        child: function (path) { return createStorageRef(ref.child(path), scheduler); },
        updateMetatdata: function (meta) { return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs__["from"])(ref.updateMetadata(meta)); },
        put: function (data, metadata) {
            var task = ref.put(data, metadata);
            return Object(__WEBPACK_IMPORTED_MODULE_0__task__["a" /* createUploadTask */])(task);
        },
        putString: function (data, format, metadata) {
            var task = ref.putString(data, format, metadata);
            return Object(__WEBPACK_IMPORTED_MODULE_0__task__["a" /* createUploadTask */])(task);
        }
    };
}
//# sourceMappingURL=ref.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createUploadTask;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__observable_fromTask__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__(22);


function createUploadTask(task) {
    var inner$ = Object(__WEBPACK_IMPORTED_MODULE_0__observable_fromTask__["a" /* fromTask */])(task);
    return {
        task: task,
        then: task.then.bind(task),
        catch: task.catch.bind(task),
        pause: task.pause.bind(task),
        cancel: task.cancel.bind(task),
        resume: task.resume.bind(task),
        snapshotChanges: function () { return inner$; },
        percentageChanges: function () { return inner$.pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["map"])(function (s) { return s.bytesTransferred / s.totalBytes * 100; })); }
    };
}
//# sourceMappingURL=task.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = fromTask;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(17);

function fromTask(task) {
    return new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"](function (subscriber) {
        var progress = function (snap) { return subscriber.next(snap); };
        var error = function (e) { return subscriber.error(e); };
        var complete = function () { return subscriber.complete(); };
        task.on('state_changed', progress, error, complete);
        return function () { return task.cancel(); };
    });
}
//# sourceMappingURL=fromTask.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StorageBucket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularFireStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ref__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var StorageBucket = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('angularfire2.storageBucket');
var AngularFireStorage = (function () {
    function AngularFireStorage(options, nameOrConfig, storageBucket, platformId, zone) {
        this.scheduler = new __WEBPACK_IMPORTED_MODULE_2__angular_fire__["FirebaseZoneScheduler"](zone, platformId);
        this.storage = zone.runOutsideAngular(function () {
            var app = Object(__WEBPACK_IMPORTED_MODULE_2__angular_fire__["_firebaseAppFactory"])(options, nameOrConfig);
            return app.storage(storageBucket || undefined);
        });
    }
    AngularFireStorage.prototype.ref = function (path) {
        return Object(__WEBPACK_IMPORTED_MODULE_1__ref__["a" /* createStorageRef */])(this.storage.ref(path), this.scheduler);
    };
    AngularFireStorage.prototype.upload = function (path, data, metadata) {
        var storageRef = this.storage.ref(path);
        var ref = Object(__WEBPACK_IMPORTED_MODULE_1__ref__["a" /* createStorageRef */])(storageRef, this.scheduler);
        return ref.put(data, metadata);
    };
    AngularFireStorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_fire__["FirebaseOptionsToken"])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_fire__["FirebaseNameOrConfigToken"])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(StorageBucket)),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [Object, Object, String, Object,
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], AngularFireStorage);
    return AngularFireStorage;
}());

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DestinationType */
/* unused harmony export EncodingType */
/* unused harmony export MediaType */
/* unused harmony export PictureSourceType */
/* unused harmony export PopoverArrowDirection */
/* unused harmony export Direction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Camera; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(89);
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


var DestinationType;
(function (DestinationType) {
    DestinationType[DestinationType["DATA_URL"] = 0] = "DATA_URL";
    DestinationType[DestinationType["FILE_URL"] = 1] = "FILE_URL";
    DestinationType[DestinationType["NATIVE_URI"] = 2] = "NATIVE_URI";
})(DestinationType || (DestinationType = {}));
var EncodingType;
(function (EncodingType) {
    EncodingType[EncodingType["JPEG"] = 0] = "JPEG";
    EncodingType[EncodingType["PNG"] = 1] = "PNG";
})(EncodingType || (EncodingType = {}));
var MediaType;
(function (MediaType) {
    MediaType[MediaType["PICTURE"] = 0] = "PICTURE";
    MediaType[MediaType["VIDEO"] = 1] = "VIDEO";
    MediaType[MediaType["ALLMEDIA"] = 2] = "ALLMEDIA";
})(MediaType || (MediaType = {}));
var PictureSourceType;
(function (PictureSourceType) {
    PictureSourceType[PictureSourceType["PHOTOLIBRARY"] = 0] = "PHOTOLIBRARY";
    PictureSourceType[PictureSourceType["CAMERA"] = 1] = "CAMERA";
    PictureSourceType[PictureSourceType["SAVEDPHOTOALBUM"] = 2] = "SAVEDPHOTOALBUM";
})(PictureSourceType || (PictureSourceType = {}));
var PopoverArrowDirection;
(function (PopoverArrowDirection) {
    PopoverArrowDirection[PopoverArrowDirection["ARROW_UP"] = 1] = "ARROW_UP";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_DOWN"] = 2] = "ARROW_DOWN";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_LEFT"] = 3] = "ARROW_LEFT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_RIGHT"] = 4] = "ARROW_RIGHT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_ANY"] = 5] = "ARROW_ANY";
})(PopoverArrowDirection || (PopoverArrowDirection = {}));
var Direction;
(function (Direction) {
    Direction[Direction["BACK"] = 0] = "BACK";
    Direction[Direction["FRONT"] = 1] = "FRONT";
})(Direction || (Direction = {}));
/**
 * @name Camera
 * @description
 * Take a photo or capture video.
 *
 * Requires the Cordova plugin: `cordova-plugin-camera`. For more info, please see the [Cordova Camera Plugin Docs](https://github.com/apache/cordova-plugin-camera).
 *
 * @usage
 * ```typescript
 * import { Camera, CameraOptions } from '@ionic-native/camera';
 *
 * constructor(private camera: Camera) { }
 *
 * ...
 *
 *
 * const options: CameraOptions = {
 *   quality: 100,
 *   destinationType: this.camera.DestinationType.FILE_URI,
 *   encodingType: this.camera.EncodingType.JPEG,
 *   mediaType: this.camera.MediaType.PICTURE
 * }
 *
 * this.camera.getPicture(options).then((imageData) => {
 *  // imageData is either a base64 encoded string or a file URI
 *  // If it's base64 (DATA_URL):
 *  let base64Image = 'data:image/jpeg;base64,' + imageData;
 * }, (err) => {
 *  // Handle error
 * });
 * ```
 * @interfaces
 * CameraOptions
 * CameraPopoverOptions
 */
var Camera = (function (_super) {
    __extends(Camera, _super);
    function Camera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
           * Constant for possible destination types
           */
        _this.DestinationType = {
            /** Return base64 encoded string. DATA_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE_URI or NATIVE_URI if possible */
            DATA_URL: 0,
            /** Return file uri (content://media/external/images/media/2 for Android) */
            FILE_URI: 1,
            /** Return native uri (eg. asset-library://... for iOS) */
            NATIVE_URI: 2
        };
        /**
           * Convenience constant
           */
        _this.EncodingType = {
            /** Return JPEG encoded image */
            JPEG: 0,
            /** Return PNG encoded image */
            PNG: 1
        };
        /**
           * Convenience constant
           */
        _this.MediaType = {
            /** Allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType */
            PICTURE: 0,
            /** Allow selection of video only, ONLY RETURNS URL */
            VIDEO: 1,
            /** Allow selection from all media types */
            ALLMEDIA: 2
        };
        /**
           * Convenience constant
           */
        _this.PictureSourceType = {
            /** Choose image from picture library (same as SAVEDPHOTOALBUM for Android) */
            PHOTOLIBRARY: 0,
            /** Take picture from camera */
            CAMERA: 1,
            /** Choose image from picture library (same as PHOTOLIBRARY for Android) */
            SAVEDPHOTOALBUM: 2
        };
        /**
           * Convenience constant
           */
        _this.PopoverArrowDirection = {
            ARROW_UP: 1,
            ARROW_DOWN: 2,
            ARROW_LEFT: 4,
            ARROW_RIGHT: 8,
            ARROW_ANY: 15
        };
        /**
           * Convenience constant
           */
        _this.Direction = {
            /** Use the back-facing camera */
            BACK: 0,
            /** Use the front-facing camera */
            FRONT: 1
        };
        return _this;
    }
    /**
     * Take a picture or video, or load one from the library.
     * @param {CameraOptions} [options] Options that you want to pass to the camera. Encoding type, quality, etc. Platform-specific quirks are described in the [Cordova plugin docs](https://github.com/apache/cordova-plugin-camera#cameraoptions-errata-).
     * @returns {Promise<any>} Returns a Promise that resolves with Base64 encoding of the image data, or the image file URI, depending on cameraOptions, otherwise rejects with an error.
     */
    /**
       * Take a picture or video, or load one from the library.
       * @param {CameraOptions} [options] Options that you want to pass to the camera. Encoding type, quality, etc. Platform-specific quirks are described in the [Cordova plugin docs](https://github.com/apache/cordova-plugin-camera#cameraoptions-errata-).
       * @returns {Promise<any>} Returns a Promise that resolves with Base64 encoding of the image data, or the image file URI, depending on cameraOptions, otherwise rejects with an error.
       */
    Camera.prototype.getPicture = /**
       * Take a picture or video, or load one from the library.
       * @param {CameraOptions} [options] Options that you want to pass to the camera. Encoding type, quality, etc. Platform-specific quirks are described in the [Cordova plugin docs](https://github.com/apache/cordova-plugin-camera#cameraoptions-errata-).
       * @returns {Promise<any>} Returns a Promise that resolves with Base64 encoding of the image data, or the image file URI, depending on cameraOptions, otherwise rejects with an error.
       */
    function (options) {
        return;
    };
    /**
     * Remove intermediate image files that are kept in temporary storage after calling camera.getPicture.
     * Applies only when the value of Camera.sourceType equals Camera.PictureSourceType.CAMERA and the Camera.destinationType equals Camera.DestinationType.FILE_URI.
     * @returns {Promise<any>}
     */
    /**
       * Remove intermediate image files that are kept in temporary storage after calling camera.getPicture.
       * Applies only when the value of Camera.sourceType equals Camera.PictureSourceType.CAMERA and the Camera.destinationType equals Camera.DestinationType.FILE_URI.
       * @returns {Promise<any>}
       */
    Camera.prototype.cleanup = /**
       * Remove intermediate image files that are kept in temporary storage after calling camera.getPicture.
       * Applies only when the value of Camera.sourceType equals Camera.PictureSourceType.CAMERA and the Camera.destinationType equals Camera.DestinationType.FILE_URI.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    Camera.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Camera.prototype, "getPicture", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            platforms: ['iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Camera.prototype, "cleanup", null);
    /**
     * @name Camera
     * @description
     * Take a photo or capture video.
     *
     * Requires the Cordova plugin: `cordova-plugin-camera`. For more info, please see the [Cordova Camera Plugin Docs](https://github.com/apache/cordova-plugin-camera).
     *
     * @usage
     * ```typescript
     * import { Camera, CameraOptions } from '@ionic-native/camera';
     *
     * constructor(private camera: Camera) { }
     *
     * ...
     *
     *
     * const options: CameraOptions = {
     *   quality: 100,
     *   destinationType: this.camera.DestinationType.FILE_URI,
     *   encodingType: this.camera.EncodingType.JPEG,
     *   mediaType: this.camera.MediaType.PICTURE
     * }
     *
     * this.camera.getPicture(options).then((imageData) => {
     *  // imageData is either a base64 encoded string or a file URI
     *  // If it's base64 (DATA_URL):
     *  let base64Image = 'data:image/jpeg;base64,' + imageData;
     * }, (err) => {
     *  // Handle error
     * });
     * ```
     * @interfaces
     * CameraOptions
     * CameraPopoverOptions
     */
    Camera = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* Plugin */])({
            pluginName: 'Camera',
            plugin: 'cordova-plugin-camera',
            pluginRef: 'navigator.camera',
            repo: 'https://github.com/apache/cordova-plugin-camera',
            platforms: ['Android', 'Browser', 'iOS', 'Windows']
        })
    ], Camera);
    return Camera;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_api__ = __webpack_require__(594);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createStorageRef", function() { return __WEBPACK_IMPORTED_MODULE_0__public_api__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "StorageBucket", function() { return __WEBPACK_IMPORTED_MODULE_0__public_api__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AngularFireStorage", function() { return __WEBPACK_IMPORTED_MODULE_0__public_api__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createUploadTask", function() { return __WEBPACK_IMPORTED_MODULE_0__public_api__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "fromTask", function() { return __WEBPACK_IMPORTED_MODULE_0__public_api__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AngularFireStorageModule", function() { return __WEBPACK_IMPORTED_MODULE_0__public_api__["b"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ref__ = __webpack_require__(548);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__ref__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage__ = __webpack_require__(551);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__storage__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__storage__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task__ = __webpack_require__(549);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__task__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__observable_fromTask__ = __webpack_require__(550);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__observable_fromTask__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__storage_module__ = __webpack_require__(595);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__storage_module__["a"]; });





//# sourceMappingURL=public_api.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularFireStorageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_storage__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AngularFireStorageModule = (function () {
    function AngularFireStorageModule() {
    }
    AngularFireStorageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            providers: [__WEBPACK_IMPORTED_MODULE_1__storage__["a" /* AngularFireStorage */]]
        })
    ], AngularFireStorageModule);
    return AngularFireStorageModule;
}());

//# sourceMappingURL=storage.module.js.map

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_user_service__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserProfilePage = /** @class */ (function () {
    function UserProfilePage(actionSheetCtrl, afStorage, authService, camera, navCtrl, navParams, platform, toastCtrl, userService) {
        var _this = this;
        this.actionSheetCtrl = actionSheetCtrl;
        this.afStorage = afStorage;
        this.authService = authService;
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.userService = userService;
        this.inputNameDisabled = true;
        this.inputUsernameDisabled = true;
        this.editIconName = "lock";
        this.editIconUsername = "lock";
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
        });
    }
    UserProfilePage.prototype.ionViewCanEnter = function () {
        return this.authService.authenticated;
    };
    UserProfilePage.prototype.ionViewDidLoad = function () {
        this.currentUser = this.navParams.data;
    };
    UserProfilePage.prototype.onSubmit = function (event) {
        var _this = this;
        event.preventDefault();
        if (this.photoUri) {
            var uploadTask = this.userService.uploadPhoto(this.photoUri, this.currentUser.$key);
            console.log('passou');
            uploadTask.on(__WEBPACK_IMPORTED_MODULE_2_firebase_app__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
                _this.uploadProgress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            }, function (error) {
                console.log(error);
            });
            uploadTask.then(function (UploadTaskSnapshot) {
                _this.afStorage.ref("/users/" + _this.currentUser.$key)
                    .getDownloadURL()
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["first"])())
                    .subscribe(function (downloadURL) {
                    _this.editUser(downloadURL);
                });
            });
        }
        else {
            this.editUser();
        }
    };
    UserProfilePage.prototype.onActionSheet = function () {
        var _this = this;
        this.actionSheetCtrl.create({
            title: 'Select image source',
            buttons: [
                {
                    text: 'Load from Library',
                    icon: !this.platform.is('ios') ? 'photos' : null,
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Use Camera',
                    icon: !this.platform.is('ios') ? 'camera' : null,
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    icon: !this.platform.is('ios') ? 'close' : null
                }
            ]
        }).present();
    };
    UserProfilePage.prototype.takePicture = function (sourceType) {
        var _this = this;
        var cameraOptions = {
            correctOrientation: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            quality: 100,
            sourceType: sourceType
        };
        this.camera.getPicture(cameraOptions)
            .then(function (fileUri) {
            _this.photoUri = 'data:image/jpeg;base64,' + fileUri;
        }).catch(function (err) {
            console.log(err);
        });
    };
    UserProfilePage.prototype.editUser = function (photoUrl) {
        var _this = this;
        this.userService
            .edit({
            name: this.currentUser.name,
            username: this.currentUser.username,
            photo: photoUrl || this.currentUser.photo || ''
        }).then(function () {
            _this.photoUri = undefined;
            _this.uploadProgress = 0;
            _this.showToast('Update successful');
        });
    };
    UserProfilePage.prototype.changeIcon = function () {
        this.editIconName = this.inputNameDisabled ? "lock" : "unlock";
        this.editIconUsername = this.inputUsernameDisabled ? "lock" : "unlock";
    };
    UserProfilePage.prototype.showToast = function (message) {
        this.toastCtrl.create({
            message: message,
            showCloseButton: true,
            closeButtonText: 'Ok'
        }).present();
    };
    UserProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user-profile',template:/*ion-inline-start:"C:\Users\EliasdeCarvalhoJunio\Desktop\ProjetoAds\myApp\src\pages\user-profile\user-profile.page.html"*/'<ion-header>\n\n    <custom-header [title]="\'User Profile Page\'"></custom-header>\n\n  </ion-header>\n\n\n\n\n\n<ion-content padding *ngIf="currentUser">\n\n  <h3>Profile</h3>\n\n\n\n  <ion-item>\n\n    <ion-icon name="person" item-left></ion-icon>\n\n    <ion-input type="text" value="{{currentUser.name}}" [(ngModel)]="currentUser.name" [disabled]="inputNameDisabled"></ion-input>\n\n    <button ion-button icon-only item-end clear (click)="inputNameDisabled = !inputNameDisabled; changeIcon();" color="dark">\n\n      <ion-icon [name]="editIconName" item-end></ion-icon>\n\n    </button>\n\n  </ion-item>\n\n  \n\n  <ion-item>\n\n    <ion-icon name="at" item-left></ion-icon>\n\n    <ion-input type="text" value="{{currentUser.username}}" [(ngModel)]="currentUser.username" [disabled]="inputUsernameDisabled"></ion-input>\n\n    <button ion-button icon-only item-end clear (click)="inputUsernameDisabled = !inputUsernameDisabled; changeIcon();" color="dark">\n\n      <ion-icon [name]="editIconUsername" item-end></ion-icon>\n\n    </button>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-icon name="image" item-left></ion-icon>\n\n    <button ion-button outline icon-start (click)="onActionSheet()">\n\n      <ion-icon name="cloud-upload"></ion-icon>\n\n      Profile Image\n\n    </button>\n\n    <ion-icon *ngIf="photoUri" name="checkmark" item-right></ion-icon>\n\n  </ion-item>\n\n\n\n  <progress-bar *ngIf="uploadProgress" [progress]="uploadProgress"></progress-bar>\n\n\n\n  <br>\n\n  <button ion-button outline block (click)="onSubmit($event)">Save</button>\n\n  <button ion-button outline block>Cancel</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\EliasdeCarvalhoJunio\Desktop\ProjetoAds\myApp\src\pages\user-profile\user-profile.page.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__["AngularFireStorage"],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_user_user_service__["a" /* UserService */]])
    ], UserProfilePage);
    return UserProfilePage;
}());

//# sourceMappingURL=user-profile.page.js.map

/***/ })

});
//# sourceMappingURL=2.js.map