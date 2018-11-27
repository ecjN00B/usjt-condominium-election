webpackJsonp([13],{

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_base_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(22);
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
    AuthService.prototype.logout = function () {
        return this.afAuth.auth.signOut();
    };
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.afAuth
                    .authState
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["first"])())
                    .subscribe(function (authUser) {
                    (authUser) ? resolve(true) : reject(false);
                });
            });
        },
        enumerable: true,
        configurable: true
    });
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}(__WEBPACK_IMPORTED_MODULE_2__base_base_service__["a" /* BaseService */]));

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_base_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_storage__ = __webpack_require__(296);
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
    function UserService(afAuth, db, firebaseApp) {
        var _this = _super.call(this) || this;
        _this.afAuth = afAuth;
        _this.db = db;
        _this.firebaseApp = firebaseApp;
        _this.users = db.list("/users").valueChanges();
        _this.listenAuthState();
        return _this;
    }
    UserService.prototype.listenAuthState = function () {
        var _this = this;
        this.afAuth
            .authState
            .subscribe(function (authUser) {
            if (authUser)
                _this.currentUser = _this.db.object("/users/" + authUser.uid);
        });
    };
    UserService.prototype.create = function (user, uuid) {
        return this.db.object("/users/" + uuid)
            .set(user)
            .catch(this.handlePromiseError);
    };
    UserService.prototype.edit = function (user) {
        return this.currentUser
            .update(user)
            .catch(this.handlePromiseError);
    };
    UserService.prototype.findUser = function (uuid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.database.ref('users').child(uuid)
                .once('value')
                .then(function (snapshot) {
                resolve(snapshot.val());
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // getAuthCurrentUser(): any {
    //   return this.firebaseApp.auth().currentUser;
    // }
    UserService.prototype.userExists = function (username) {
        return this.db.list("/users", function (ref) { return ref.orderByChild('username').equalTo(username); })
            .valueChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["map"])(function (users) {
            return users.length > 0;
        }), Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["catchError"])(this.handleObservableError));
    };
    UserService.prototype.uploadPhoto = function (photoUri, userId) {
        return this.firebaseApp
            .storage()
            .ref()
            .child("/users/" + userId)
            .putString(photoUri, 'data_url');
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2__["FirebaseApp"]])
    ], UserService);
    return UserService;
}(__WEBPACK_IMPORTED_MODULE_4__base_base_service__["a" /* BaseService */]));

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(467);
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

/***/ 197:
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
webpackEmptyAsyncContext.id = 197;

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin/admin.page.module": [
		505,
		3
	],
	"../pages/candidates-profile/candidates-profile.page.module": [
		506,
		12
	],
	"../pages/candidates/candidates.page.module": [
		507,
		5
	],
	"../pages/charts/charts.page.module": [
		508,
		1
	],
	"../pages/home/home.page.module": [
		509,
		7
	],
	"../pages/login/login.page.module": [
		510,
		11
	],
	"../pages/register/register.page.module": [
		511,
		10
	],
	"../pages/scanned-candidate/scanned-candidate.page.module": [
		512,
		4
	],
	"../pages/scanned-user/scanned-user.page.module": [
		513,
		6
	],
	"../pages/tabs/tabs.page.module": [
		514,
		9
	],
	"../pages/title/title.page.module": [
		515,
		0
	],
	"../pages/tutorial/tutorial.page.module": [
		516,
		8
	],
	"../pages/user-profile/user-profile.page.module": [
		517,
		2
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
webpackAsyncContext.id = 238;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Environment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__env__ = __webpack_require__(475);

var Environment = /** @class */ (function () {
    function Environment() {
        this.apiKey = __WEBPACK_IMPORTED_MODULE_0__env__["a" /* process */].env.apiKey;
        this.authDomain = __WEBPACK_IMPORTED_MODULE_0__env__["a" /* process */].env.authDomain;
        this.databaseURL = __WEBPACK_IMPORTED_MODULE_0__env__["a" /* process */].env.databaseURL;
        this.projectId = __WEBPACK_IMPORTED_MODULE_0__env__["a" /* process */].env.projectId;
        this.storageBucket = __WEBPACK_IMPORTED_MODULE_0__env__["a" /* process */].env.storageBucket;
        this.messagingSenderId = __WEBPACK_IMPORTED_MODULE_0__env__["a" /* process */].env.messagingSenderId;
        this.webServiceURL = __WEBPACK_IMPORTED_MODULE_0__env__["a" /* process */].env.webServiceURL;
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
    Environment.prototype.getWebServiceURL = function () {
        return this.webServiceURL;
    };
    return Environment;
}());

//# sourceMappingURL=environment.model.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(430);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_barcode_scanner__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_environment_model__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_user_user_service__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var environment = new __WEBPACK_IMPORTED_MODULE_11__models_environment_model__["a" /* Environment */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["AngularFireModule"].initializeApp(firebaseAppConfig),
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    scrollPadding: false,
                    scrollAssist: true,
                    autoFocusAssist: false
                }, {
                    links: [
                        { loadChildren: '../pages/admin/admin.page.module#AdminPageModule', name: 'AdminPage', segment: 'admin.page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/candidates-profile/candidates-profile.page.module#CandidatesProfilePageModule', name: 'CandidatesProfilePage', segment: 'profile', priority: 'low', defaultHistory: ['CandidatesPage'] },
                        { loadChildren: '../pages/candidates/candidates.page.module#CandidatesPageModule', name: 'CandidatesPage', segment: 'list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/charts/charts.page.module#ChartsPageModule', name: 'ChartsPage', segment: 'charts.page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.page.module#HomePageModule', name: 'HomePage', segment: 'home.page', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.page.module#LoginPageModule', name: 'LoginPage', segment: 'login.page', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.page.module#RegisterPageModule', name: 'RegisterPage', segment: 'register.page', priority: 'low', defaultHistory: ['LoginPage'] },
                        { loadChildren: '../pages/scanned-candidate/scanned-candidate.page.module#ScannedCandidatePageModule', name: 'ScannedCandidatePage', segment: 'scanned-candidate.page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/scanned-user/scanned-user.page.module#ScannedUserPageModule', name: 'ScannedUserPage', segment: 'scanned-user.page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.page.module#TabsPageModule', name: 'TabsPage', segment: 'tabs.page', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/title/title.page.module#TitlePageModule', name: 'TitlePage', segment: 'title.page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.page.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial.page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-profile/user-profile.page.module#UserProfilePageModule', name: 'UserProfilePage', segment: 'user-profile.page', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["AngularFireAuth"],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["AngularFireDatabase"],
                __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_user_user_service__["a" /* UserService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 475:
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
        messagingSenderId: "911436534267",
        webServiceURL: "https://mysterious-plateau-70186.herokuapp.com"
    }
};
//# sourceMappingURL=env.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_user_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(22);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
    function MyApp(appCtrl, authService, platform, statusBar, splashScreen, userService) {
        var _this = this;
        authService
            .afAuth
            .authState
            .subscribe(function (authUser) {
            if (authUser) {
                userService.currentUser
                    .snapshotChanges()
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function (action) { return (__assign({ $key: action.key }, action.payload.val())); })).subscribe(function (user) {
                    _this.currentUser = user;
                    appCtrl.getRootNav().setRoot('TabsPage', { currentUser: _this.currentUser });
                });
            }
            else {
                appCtrl.getRootNav().setRoot('LoginPage');
            }
        });
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.viewProfile = function () {
        this.nav.push('UserProfilePage', this.currentUser);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\EliasdeCarvalhoJunio\Desktop\ProjetoAds\myApp\src\app\app.html"*/'<ion-menu [content]="content" swipeEnabled="false">\n\n    <ion-content padding *ngIf="currentUser">\n\n        <ion-list>\n\n            <ion-avatar ion-item class="menu-ion-avatar">\n\n                <img [src]="currentUser.photo || \'./assets/imgs/no-photo.jpg\'" class="menu-avatar-image">\n\n            </ion-avatar>\n\n            <p ion-item text-wrap text-center>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis commodi provident aperiam quas architecto, ipsam reiciendis itaque earum facere repellendus.</p>\n\n            <button ion-item (click)="viewProfile()" menuClose>Profile</button>\n\n            <button ion-item>Settings</button>\n\n        </ion-list>\n\n    </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav #content [root]="rootPage" [rootParams]="currentUser"></ion-nav>'/*ion-inline-end:"C:\Users\EliasdeCarvalhoJunio\Desktop\ProjetoAds\myApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__providers_user_user_service__["a" /* UserService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[297]);
//# sourceMappingURL=main.js.map