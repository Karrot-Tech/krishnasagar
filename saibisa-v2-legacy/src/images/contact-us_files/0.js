webpackJsonp([0],{

/***/ 869:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(894);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__ = __webpack_require__(895);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__["a" /* DirectivesModule */]
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 894:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_services_flamelink_service__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_event_logger_event_logger__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_version__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_is_cordova_available__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_app_config__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(171);
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
    function HomePage(navCtrl, navParams, loadingCtrl, menuController, app, events, _fl, logger, splashScreen, appVersion, config, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.menuController = menuController;
        this.app = app;
        this.events = events;
        this._fl = _fl;
        this.logger = logger;
        this.splashScreen = splashScreen;
        this.appVersion = appVersion;
        this.config = config;
        this.http = http;
        this.title = 'Home';
        this.msgTitle = '';
        this.msgContent = '';
        this.splashBg = '../assets/img/static-app-banner.png';
        this.splashLogo = '../assets/img/splash-logo-loading.png';
        this.bannerScrollText = '';
        this.bannerPageLink = { component: 'ArticlePage',
            params: {
                articleId: '1538935661036'
            }
        };
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.logger.setCurrentScreen(this.title);
        if (Object(__WEBPACK_IMPORTED_MODULE_6__common_is_cordova_available__["a" /* isCordovaAvailable */])()) {
            this.appVersion.getVersionNumber()
                .then(function (data) {
                _this.handleVersionCheck(data);
            });
        }
        this._fl.getApp().content.subscribe('homePage', { populate: true }, function (error, data) {
            if (error) {
                console.error('homePage, error', error);
            }
            console.log('homePage, content', data);
            _this.processResponse(data);
            _this.splashScreen.hide();
        });
        this.events.unsubscribe('navigationEvent');
        this.events.subscribe('navigationEvent', function (object) {
            _this.menuController.close();
            if (object.component) {
                _this.app.getRootNav().getActiveChildNav().select(0);
                _this.navCtrl.push(object.component, object.params);
            }
        });
    };
    HomePage.prototype.handleVersionCheck = function (currentVersion) {
        var _this = this;
        var url = this.config.versionCheckUrl + '?appVersion=' + currentVersion;
        this.http.get(url)
            .subscribe(function (data) {
            try {
                if (data.json().forceUpdate) {
                    _this.logger.logForceUpdateEvent(data.json());
                    _this.openForceUpdatePage();
                }
            }
            catch (error) {
                console.error('handleVersionCheck, error', JSON.stringify(error));
            }
        });
    };
    HomePage.prototype.openForceUpdatePage = function () {
        this.events.publish('navigationEvent', { component: 'UpdatePage' });
    };
    HomePage.prototype.processResponse = function (data) {
        try {
            this.title = data.pageTitle;
            this.msgTitle = data.mainMessageTitle;
            this.msgContent = data.mainMessageContent;
            this.bannerScrollText = data.bannerScrollText;
            this.bannerPageLink = data.bannerPageLink;
            var temp_1 = [];
            data.imageDeck.forEach(function (ele) {
                temp_1.push({ image: ele.image[0].url });
            });
            this.slides = temp_1;
            //this.showToastMessage({title: "Schedule/Events", body: "Di Jaans updacoming Schedule.. updated", buttonTxt:"View More"});
            console.info('homePage, slides', temp_1);
            if (data.splashBg && data.splashBg.length > 0) {
                this.splashBg = data.splashBg[0].url;
            }
            if (data.splashLogo && data.splashLogo.length > 0) {
                this.splashLogo = data.splashLogo[0].url;
            }
        }
        catch (error) {
            console.error('homePage, error', error);
        }
    };
    HomePage.prototype.openEventsPage = function () {
        this.events.publish('navigationEvent', this.bannerPageLink);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/earth/Documents/labs/saibisa_v2/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only class="menu-button">\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title><img src="assets/img/logo.png"/></ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content scroll="false">\n\n  <ion-card *ngIf="bannerScrollText">\n    <ion-card-header \n      (click)="openEventsPage()" \n      style="padding:0px; background: #FFE4B5;">\n      <div class="scroll-left">\n        <p>{{bannerScrollText}}</p>\n        </div>\n      <!-- <marquee behavior="scroll" direction="left">{{bannerScrollText}}</marquee> -->\n    </ion-card-header>\n    <!-- <ion-card-content>\n    Add card content here!\n    </ion-card-content> -->\n  </ion-card>\n    <!-- <div class="splash-bg">\n        <ion-slides *ngIf="slides && slides.length"  autoplay="2000" loop="true" speed="300">\n          <ion-slide *ngFor="let imageElement of slides; index as i" >\n              <img [src]="imageElement.image">\n          </ion-slide>\n        </ion-slides> \n    </div> -->\n  <div class="splash-bg" background-image="{{ splashBg }}">\n  </div>\n    <div class="splash-info">\n      <div class="splash-logo" background-image="{{ splashLogo }}"></div>\n      <div class="splash-intro" [textContent]="msgTitle"></div>\n      <div class="message" [innerHTML]="msgContent"></div>\n    </div>\n</ion-content>\n  '/*ion-inline-end:"/Users/earth/Documents/labs/saibisa_v2/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__app_shared_services_flamelink_service__["a" /* FlamelinkService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_event_logger_event_logger__["a" /* EventLoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_7__app_app_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* Http */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 895:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__background_image_background_image__ = __webpack_require__(896);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DirectivesModule = /** @class */ (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__background_image_background_image__["a" /* BackgroundImageDirective */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__background_image_background_image__["a" /* BackgroundImageDirective */]]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 896:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgroundImageDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BackgroundImageDirective = /** @class */ (function () {
    function BackgroundImageDirective(renderer, elRef) {
        this.renderer = renderer;
        this.elRef = elRef;
        this.el = this.elRef.nativeElement;
    }
    BackgroundImageDirective.prototype.ngAfterViewInit = function () {
        this.setBackgroundImage();
    };
    BackgroundImageDirective.prototype.ngOnChanges = function (changes) {
        if (changes['backgroundImage'])
            this.setBackgroundImage();
    };
    BackgroundImageDirective.prototype.setBackgroundImage = function () {
        this.renderer.setStyle(this.el, "backgroundImage", "url(" + this.backgroundImage + ")");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('background-image'),
        __metadata("design:type", String)
    ], BackgroundImageDirective.prototype, "backgroundImage", void 0);
    BackgroundImageDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[background-image]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], BackgroundImageDirective);
    return BackgroundImageDirective;
}());

//# sourceMappingURL=background-image.js.map

/***/ })

});
//# sourceMappingURL=0.js.map