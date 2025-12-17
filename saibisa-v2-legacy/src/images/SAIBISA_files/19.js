webpackJsonp([19],{

/***/ 866:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonatePageModule", function() { return DonatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__donate__ = __webpack_require__(891);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DonatePageModule = /** @class */ (function () {
    function DonatePageModule() {
    }
    DonatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__donate__["a" /* DonatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__donate__["a" /* DonatePage */]),
            ],
        })
    ], DonatePageModule);
    return DonatePageModule;
}());

//# sourceMappingURL=donate.module.js.map

/***/ }),

/***/ 891:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_services_flamelink_service__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_event_logger_event_logger__ = __webpack_require__(510);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DonatePage = /** @class */ (function () {
    function DonatePage(navCtrl, navParams, loadingCtrl, _fl, logger) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this._fl = _fl;
        this.logger = logger;
        this.title = 'Donate';
    }
    DonatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DonatePage');
    };
    DonatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.logger.setCurrentScreen(this.title);
        this._fl.getApp().content.subscribe('donatePage', { populate: true }, function (error, data) {
            if (error) {
                console.error(error);
            }
            console.log('donatePage, content', data);
            _this.handleResponse(data);
        });
    };
    DonatePage.prototype.handleResponse = function (data) {
        try {
            this.title = data.pageTitle;
            this.content = data.content;
            if (data.heroImage && data.heroImage.length > 0) {
                this.heroImage = data.heroImage[0].url;
            }
        }
        catch (error) {
            console.log('donatePage, error', error);
        }
    };
    DonatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-donate',template:/*ion-inline-start:"/Users/earth/Documents/labs/saibisa_v2/src/pages/donate/donate.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only class="menu-button">\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content class="banner-container" text-wrap>\n      <img *ngIf="heroImage" [src]="heroImage" />\n      <p padding *ngIf="content" padding [innerHTML]="content"></p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/earth/Documents/labs/saibisa_v2/src/pages/donate/donate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__app_shared_services_flamelink_service__["a" /* FlamelinkService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_event_logger_event_logger__["a" /* EventLoggerProvider */]])
    ], DonatePage);
    return DonatePage;
}());

//# sourceMappingURL=donate.js.map

/***/ })

});
//# sourceMappingURL=19.js.map