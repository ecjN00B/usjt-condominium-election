webpackJsonp([12],{

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidatesPageModule", function() { return CandidatesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__candidates_page__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(516);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CandidatesPageModule = /** @class */ (function () {
    function CandidatesPageModule() {
    }
    CandidatesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__candidates_page__["a" /* CandidatesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__candidates_page__["a" /* CandidatesPage */]),
            ]
        })
    ], CandidatesPageModule);
    return CandidatesPageModule;
}());

//# sourceMappingURL=candidates.page.module.js.map

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

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidatesPage; });
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


var CandidatesPage = /** @class */ (function () {
    function CandidatesPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.searchQuery = '';
        this.initializeCandidates();
    }
    CandidatesPage.prototype.initializeCandidates = function () {
        this.candidates = [
            {
                'name': 'N00B',
                'sigla': '#000',
                'description': 'Taxation is theft'
            },
            {
                'name': 'Candidato 1',
                'sigla': '#001',
                'description': 'Taxation is theft'
            },
            {
                'name': 'Candidato 2',
                'sigla': '#002',
                'description': 'Taxation is theft'
            },
            {
                'name': 'Candidato 3',
                'sigla': '#003',
                'description': 'Taxation is theft'
            }
        ];
    };
    CandidatesPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeCandidates();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.candidates = this.candidates.filter(function (candidate) {
                return (candidate.name.toLowerCase().indexOf(val.toLowerCase()) > -1) || (candidate.sigla.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    CandidatesPage.prototype.viewProfile = function (i) {
        this.navCtrl.push('CandidatesProfilePage', this.candidates[i]);
    };
    CandidatesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-candidates',template:/*ion-inline-start:"C:\Users\EliasdeCarvalhoJunio\Desktop\ProjetoAds\myApp\src\pages\candidates\candidates.page.html"*/'<ion-header>\n  <custom-header [title]="\'Candidatos Page\'"></custom-header>\n</ion-header>\n\n<ion-content padding>\n    <ion-card>\n        <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n        <ion-list>\n          <button ion-item *ngFor="let candidate of candidates; let i = index" (click)="viewProfile(i)">  \n            <ion-avatar item-start>\n                <img src="../assets/imgs/author.jpg" />  \n            </ion-avatar>\n            <h2>{{ candidate.name }}</h2>\n            <p>{{ candidate.description }}</p>\n            <ion-note item-end>{{ candidate.sigla }}</ion-note>\n          </button>      \n        </ion-list>\n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\EliasdeCarvalhoJunio\Desktop\ProjetoAds\myApp\src\pages\candidates\candidates.page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], CandidatesPage);
    return CandidatesPage;
}());

//# sourceMappingURL=candidates.page.js.map

/***/ })

});
//# sourceMappingURL=12.js.map