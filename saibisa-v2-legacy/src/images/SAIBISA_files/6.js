webpackJsonp([6],{

/***/ 881:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs__ = __webpack_require__(908);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__tabs__["a" /* TabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__tabs__["a" /* TabsPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__tabs__["a" /* TabsPage */]
            ]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 908:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3____ = __webpack_require__(513);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var tabTitleKeys = ['TAB1_TITLE', 'TAB2_TITLE', 'TAB3_TITLE', 'TAB4_TITLE', 'TAB5_TITLE'];
var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, translateService, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.translateService = translateService;
        this.events = events;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3____["b" /* Tab1Root */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3____["c" /* Tab2Root */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3____["d" /* Tab3Root */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3____["e" /* Tab4Root */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_3____["f" /* Tab5Root */];
        this.tab1Title = "Home";
        this.tab2Title = "Di Jaan";
        this.tab3Title = "Our Seva";
        this.tab4Title = "We Heal";
        this.tab5Title = "Music";
        this.tab1Icon = "fa-fal-home";
        this.tab2Icon = "fa-fal-dijaan";
        this.tab3Icon = "fa-fal-initiatives";
        this.tab4Icon = "fa-fal-healing";
        this.tab5Icon = "fa-fal-audio";
        this.tab2PostData = { articleId: '1538910075447' };
        translateService.get(tabTitleKeys).subscribe(function (values) {
            _this.tab1Title = _this.withDefault(values, 'TAB1_TITLE', _this.tab1Title);
            _this.tab2Title = _this.withDefault(values, 'TAB2_TITLE', _this.tab2Title);
            _this.tab3Title = _this.withDefault(values, 'TAB3_TITLE', _this.tab3Title);
            _this.tab4Title = _this.withDefault(values, 'TAB4_TITLE', _this.tab4Title);
            _this.tab5Title = _this.withDefault(values, 'TAB5_TITLE', _this.tab5Title);
        });
    }
    TabsPage.prototype.withDefault = function (values, key, def) {
        return (key == values[key]) ? def : values[key];
    };
    TabsPage.prototype.tabChange = function (tab) {
        this.events.publish('tab-switch', tab);
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/earth/Documents/labs/saibisa_v2/src/pages/tabs/tabs.html"*/'<ion-tabs (ionChange)="tabChange($event)">\n  <ion-tab [root]="tab1Root" [tabTitle]="tab1Title" [tabIcon]="tab1Icon"></ion-tab>\n  <ion-tab [root]="tab2Root" [tabTitle]="tab2Title" [tabIcon]="tab2Icon" [rootParams]="tab2PostData"></ion-tab>\n  <ion-tab [root]="tab3Root" [tabTitle]="tab3Title" [tabIcon]="tab3Icon"></ion-tab>\n  <ion-tab [root]="tab4Root" [tabTitle]="tab4Title" [tabIcon]="tab4Icon"></ion-tab>\n  <ion-tab [root]="tab5Root" [tabTitle]="tab5Title" [tabIcon]="tab5Icon"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/earth/Documents/labs/saibisa_v2/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

});
//# sourceMappingURL=6.js.map