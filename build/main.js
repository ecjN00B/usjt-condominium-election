webpackJsonp([8],{

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(17);


var extractError = function (error) {
    var errMsg;
    if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Response */]) {
        var body = error.json() || '';
        var err = body.error || JSON.stringify(body);
        errMsg = error.status + " - " + (error.statusText || '') + " " + err;
    }
    else {
        errMsg = error.message ? error.message : error.toString();
    }
    return errMsg;
};
var BaseService = /** @class */ (function () {
    function BaseService() {
    }
    BaseService.prototype.handlePromiseError = function (error) {
        return Promise.reject(extractError(error));
    };
    BaseService.prototype.handleObservableError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(extractError(error));
    };
    return BaseService;
}());

//# sourceMappingURL=base.service.js.map

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 193;

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.page.module": [
		508,
		3
	],
	"../pages/candidates-profile/candidates-profile.page.module": [
		502,
		7
	],
	"../pages/candidates/candidates.page.module": [
		503,
		2
	],
	"../pages/graphics/graphics.page.module": [
		505,
		0
	],
	"../pages/home/home.page.module": [
		504,
		1
	],
	"../pages/login/login.page.module": [
		509,
		6
	],
	"../pages/register/register.page.module": [
		506,
		5
	],
	"../pages/tabs/tabs.page.module": [
		507,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 234;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_base_service__ = __webpack_require__(154);
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




var UserService = /** @class */ (function (_super) {
    __extends(UserService, _super);
    function UserService(db) {
        var _this = _super.call(this) || this;
        _this.db = db;
        _this.users = db.list("/users").valueChanges();
        return _this;
    }
    UserService.prototype.create = function (user, uuid) {
        return this.db.object("/users/" + uuid)
            .set(user)
            .catch(this.handlePromiseError);
    };
    UserService.prototype.userExists = function (username) {
        return this.db.list("/users", function (ref) { return ref.orderByChild('username').equalTo(username); })
            .valueChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["map"])(function (users) {
            return users.length > 0;
        }), Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["catchError"])(this.handleObservableError));
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]) === "function" && _a || Object])
    ], UserService);
    return UserService;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_3__base_base_service__["a" /* BaseService */]));

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_base_service__ = __webpack_require__(154);
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



var AuthService = /** @class */ (function (_super) {
    __extends(AuthService, _super);
    function AuthService(afAuth) {
        var _this = _super.call(this) || this;
        _this.afAuth = afAuth;
        return _this;
    }
    AuthService.prototype.createAuthUser = function (user) {
        return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
            .catch(this.handlePromiseError);
    };
    AuthService.prototype.loginWithEmail = function (user) {
        return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
            .then(function (authUser) {
            return authUser != null;
        }).catch(this.handlePromiseError);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"]) === "function" && _a || Object])
    ], AuthService);
    return AuthService;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__base_base_service__["a" /* BaseService */]));

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(424);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth_service__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_environment_model__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_user_user_service__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var environment = new __WEBPACK_IMPORTED_MODULE_9__models_environment_model__["a" /* Environment */]();
var firebaseAppConfig = {
    apiKey: environment.getApiKey(),
    authDomain: environment.getAuthDomain(),
    databaseURL: environment.getDatabaseUrl(),
    projectId: environment.getProjectid(),
    storageBucket: environment.getStorageBucket(),
    messagingSenderId: environment.getMessagingSenderId()
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["AngularFireModule"].initializeApp(firebaseAppConfig),
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/candidates-profile/candidates-profile.page.module#CandidatesProfilePageModule', name: 'CandidatesProfilePage', segment: 'profile', priority: 'low', defaultHistory: ['CandidatesPage'] },
                        { loadChildren: '../pages/candidates/candidates.page.module#CandidatesPageModule', name: 'CandidatesPage', segment: 'list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.page.module#HomePageModule', name: 'HomePage', segment: 'home.page', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/graphics/graphics.page.module#GraphicsPageModule', name: 'GraphicsPage', segment: 'graphics.page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.page.module#RegisterPageModule', name: 'RegisterPage', segment: 'register.page', priority: 'low', defaultHistory: ['LoginPage'] },
                        { loadChildren: '../pages/tabs/tabs.page.module#TabsPageModule', name: 'TabsPage', segment: 'tabs.page', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/about/about.page.module#AboutPageModule', name: 'AboutPage', segment: 'about.page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.page.module#LoginPageModule', name: 'LoginPage', segment: 'login.page', priority: 'high', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__["AngularFireAuth"],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["AngularFireDatabase"],
                __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_user_user_service__["a" /* UserService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = 'LoginPage';
        this.pages = [
            {
                title: 'HomePage',
                component: 'HomePage',
                index: 0,
                icon: 'home'
            }
        ];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.openPage = function (page, index) {
        var params = {};
        if (index)
            params = { tabIndex: page.index };
        if (this.nav.getActiveChildNav() && index != undefined)
            this.nav.getActiveChildNav().select(index);
        else
            this.nav.setRoot(page.pageName, params);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\EliasdeCarvalhoJunio\Desktop\ProjetoAds\myApp\src\app\app.html"*/'<ion-menu [content]="content">\n    <ion-content padding>\n        <ion-list>\n            <ion-avatar ion-item class="menu-ion-avatar">\n                <img src="./assets/imgs/author.jpg" class="menu-avatar-image">\n            </ion-avatar>\n            <p ion-item text-wrap text-center>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis commodi provident aperiam quas architecto, ipsam reiciendis itaque earum facere repellendus.</p>\n            <button ion-item *ngFor="let page of pages" (click)="openPage(page.component, page.index)" menuClose>\n                {{page.title}}\n            </button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n<ion-nav #content [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\EliasdeCarvalhoJunio\Desktop\ProjetoAds\myApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Environment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__env__ = __webpack_require__(501);

var Environment = /** @class */ (function () {
    function Environment() {
        this.apiKey = __WEBPACK_IMPORTED_MODULE_0__env__["a" /* process */].env.apiKey;
        this.authDomain = __WEBPACK_IMPORTED_MODULE_0__env__["a" /* process */].env.authDomain;
        this.databaseURL = __WEBPACK_IMPORTED_MODULE_0__env__["a" /* process */].env.databaseURL;
        this.projectId = __WEBPACK_IMPORTED_MODULE_0__env__["a" /* process */].env.projectId;
        this.storageBucket = __WEBPACK_IMPORTED_MODULE_0__env__["a" /* process */].env.storageBucket;
        this.messagingSenderId = __WEBPACK_IMPORTED_MODULE_0__env__["a" /* process */].env.messagingSenderId;
    }
    Environment.prototype.getApiKey = function () {
        return this.apiKey;
    };
    Environment.prototype.getAuthDomain = function () {
        return this.authDomain;
    };
    Environment.prototype.getDatabaseUrl = function () {
        return this.databaseURL;
    };
    Environment.prototype.getProjectid = function () {
        return this.projectId;
    };
    Environment.prototype.getStorageBucket = function () {
        return this.storageBucket;
    };
    Environment.prototype.getMessagingSenderId = function () {
        return this.messagingSenderId;
    };
    return Environment;
}());

//# sourceMappingURL=environment.model.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return process; });
var process = {
    env: {
        apiKey: "AIzaSyD4wHka_tOEnArlFDFdNxamQdykzHPHbLQ",
        authDomain: "usjt-condominium-election-app.firebaseapp.com",
        databaseURL: "https://usjt-condominium-election-app.firebaseio.com",
        projectId: "usjt-condominium-election-app",
        storageBucket: "usjt-condominium-election-app.appspot.com",
        messagingSenderId: "911436534267"
    }
};
//# sourceMappingURL=env.js.map

/***/ })

},[291]);
//# sourceMappingURL=main.js.map