webpackJsonp([3],{

/***/ 884:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeVideoPageModule", function() { return YoutubeVideoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__youtube_video__ = __webpack_require__(912);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var YoutubeVideoPageModule = /** @class */ (function () {
    function YoutubeVideoPageModule() {
    }
    YoutubeVideoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__youtube_video__["a" /* YoutubeVideoPage */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__youtube_video__["a" /* YoutubeVideoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__youtube_video__["a" /* YoutubeVideoPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], YoutubeVideoPageModule);
    return YoutubeVideoPageModule;
}());

//# sourceMappingURL=youtube-video.module.js.map

/***/ }),

/***/ 912:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeVideoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_event_logger_event_logger__ = __webpack_require__(510);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var YoutubeVideoPage = /** @class */ (function () {
    function YoutubeVideoPage(navParams, navCtrl, sanitizer, config, events, platform, logger) {
        var _this = this;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.sanitizer = sanitizer;
        this.config = config;
        this.events = events;
        this.platform = platform;
        this.logger = logger;
        this.video = navParams.get('video');
        this.youtubeUrl = config.youtubeUrl;
        this.prepareResource();
        platform.ready().then(function () {
            platform.pause.subscribe(function (result) {
                _this.onPause();
            });
            platform.resume.subscribe(function (result) {
                _this.onResume();
            });
        });
    }
    YoutubeVideoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad YoutubeVideoPage');
        // this.events.publish('freeAudio', { reason: 'entering videos page' });
    };
    YoutubeVideoPage.prototype.ionViewWillLeave = function () {
        console.log('ionViewWillLeave YoutubeVideoPage');
        //this.pauseSilent();
    };
    YoutubeVideoPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    YoutubeVideoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.logger.setCurrentScreen('YoutubeVideo');
        this.events.subscribe('navigationEvent', function (object) {
            _this.onPause();
        });
        this.events.subscribe('tab-switch', function (object) {
            _this.onPause();
        });
    };
    YoutubeVideoPage.prototype.onPause = function () {
        this.logger.logActivityEvent({ page: 'YoutubeVideo', action: 'pause' });
        this.callPlayer("youtubeChannelPlayer", "pauseVideo");
    };
    YoutubeVideoPage.prototype.onResume = function () {
        this.logger.logActivityEvent({ page: 'YoutubeVideo', action: 'resume' });
        this.callPlayer("youtubeChannelPlayer", "playVideo");
    };
    YoutubeVideoPage.prototype.prepareResource = function () {
        var url = 'https://balticlivecam.com/cameras/india/shirdi/sai-baba-samadhi-mandir/?embed'; //this.youtubeUrl + 'embed/' + this.video.snippet.resourceId.videoId + '?enablejsapi=1&modestbranding=1&rel=0&showinfo=0';
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    YoutubeVideoPage.prototype.callPlayer = function (frame_id, func) {
        this.logger.logActivityEvent({ page: 'YoutubeVideo', action: 'callPlayer' });
        var iframe = document.getElementById(frame_id);
        if (iframe && iframe.tagName.toUpperCase() != 'IFRAME') {
            iframe = iframe.getElementsByTagName('iframe')[0];
        }
        if (iframe) {
            // Frame exists, 
            iframe.contentWindow.postMessage(JSON.stringify({
                "event": "command",
                "func": func,
                "args": [],
                "id": frame_id
            }), "*");
        }
    };
    YoutubeVideoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-youtube-video',template:/*ion-inline-start:"/Users/earth/Documents/labs/saibisa_v2/src/pages/youtube-video/youtube-video.html"*/'<ion-header>\n  <ion-navbar class="youtube">\n    <ion-title>{{video.snippet.title}}</ion-title>\n    <ion-buttons end>\n        <button ion-button (tap)="closeModal()" class="close close-modal">\n            <ion-icon item-right name="ios-close-outline"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content class="youtube-video">\n  <div id="youtubeChannelPlayer">\n    <iframe *ngIf="video.snippet.resourceId.videoId" [src]="videoUrl" frameborder="0" allowfullscreen="true" allow="autoplay; encrypted-media"></iframe>\n  </div>\n\n  <div padding>\n    <h2>{{video.snippet.title}}</h2>\n    <!-- <p>Published by <strong>{{video.snippet.channelTitle}}</strong></p> -->\n    <p [innerHtml]="video.snippet.description"></p>\n    <!-- <button (click)="onPause()" ion-button icon-only>pause</button>\n          <button (click)="onResume()" ion-button icon-only>play</button> -->\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/earth/Documents/labs/saibisa_v2/src/pages/youtube-video/youtube-video.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__providers_event_logger_event_logger__["a" /* EventLoggerProvider */]])
    ], YoutubeVideoPage);
    return YoutubeVideoPage;
}());

//# sourceMappingURL=youtube-video.js.map

/***/ })

});
//# sourceMappingURL=3.js.map