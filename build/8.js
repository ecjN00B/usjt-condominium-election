webpackJsonp([8],{

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageModule", function() { return TutorialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutorial_page__ = __webpack_require__(592);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TutorialPageModule = /** @class */ (function () {
    function TutorialPageModule() {
    }
    TutorialPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tutorial_page__["a" /* TutorialPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tutorial_page__["a" /* TutorialPage */])
            ]
        })
    ], TutorialPageModule);
    return TutorialPageModule;
}());

//# sourceMappingURL=tutorial.page.module.js.map

/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
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


var TutorialPage = /** @class */ (function () {
    function TutorialPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.slides = [
            {
                title: "Welcome to the Docs!",
                description: "The <b>Condominium Election App</b> displays several useful functions that include voting on your candidate.",
                image: "./assets/imgs/tutorial.png"
            },
            {
                title: "Edit Profile",
                description: "On the <b>Profile Page</b> you can add a photo and edit your name / username",
                image: "./assets/imgs/edit-profile.png"
            },
            {
                title: "See Candidates",
                description: "On the <b>Candidates Tab</b> you can find your favorite candidate and your information",
                image: "./assets/imgs/search-candidate.png"
            },
            {
                title: "See Current Votes",
                description: "On the <b>Graphs Tab</b> you can monitor the current voting",
                image: "./assets/imgs/current-votes.jpg"
            }
        ];
    }
    TutorialPage.prototype.dismiss = function () {
        this.navCtrl.setRoot('TabsPage');
    };
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'tutorial',template:/*ion-inline-start:"C:\Users\EliasdeCarvalhoJunio\Desktop\ProjetoAds\myApp\src\pages\tutorial\tutorial.page.html"*/'<ion-content class="tutorial">\n\n\n\n  <ion-slides pager autoplay=5000>\n\n    <ion-slide *ngFor="let slide of slides">\n\n      <ion-toolbar>\n\n        <ion-buttons end>\n\n          <button ion-button color="primary" (click)="dismiss()">Skip</button>\n\n        </ion-buttons>\n\n      </ion-toolbar>\n\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n\n      <img [src]="slide.image" class="slide-image"/>\n\n      <p [innerHTML]="slide.description"></p>\n\n    </ion-slide>\n\n    <ion-slide>\n\n      <ion-toolbar>\n\n      </ion-toolbar>\n\n      <h2 class="slide-title">Finished Tutorial</h2>\n\n      <img src="./assets/imgs/tutorial-end.png" class="slide-image"/>\n\n      <button ion-button large clear icon-end color="primary" (click)="dismiss()">\n\n        Continue\n\n        <ion-icon name="arrow-forward"></ion-icon>\n\n      </button>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>'/*ion-inline-end:"C:\Users\EliasdeCarvalhoJunio\Desktop\ProjetoAds\myApp\src\pages\tutorial\tutorial.page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.page.js.map

/***/ })

});
//# sourceMappingURL=8.js.map