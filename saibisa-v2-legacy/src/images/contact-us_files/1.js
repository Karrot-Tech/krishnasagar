webpackJsonp([1],{

/***/ 883:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubePageModule", function() { return YoutubePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__youtube__ = __webpack_require__(910);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var YoutubePageModule = /** @class */ (function () {
    function YoutubePageModule() {
    }
    YoutubePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__youtube__["a" /* YoutubePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__youtube__["a" /* YoutubePage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__youtube__["a" /* YoutubePage */]
            ],
        })
    ], YoutubePageModule);
    return YoutubePageModule;
}());

//# sourceMappingURL=youtube.module.js.map

/***/ }),

/***/ 910:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_services_flamelink_service__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_event_logger_event_logger__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_youtube_service__ = __webpack_require__(911);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var YoutubePage = /** @class */ (function () {
    function YoutubePage(youtubeService, navParams, navCtrl, modalCtrl, events, _fl, logger, splashScreen) {
        this.youtubeService = youtubeService;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this._fl = _fl;
        this.logger = logger;
        this.splashScreen = splashScreen;
        this.title = 'Youtube';
        this.playlistId = navParams.get('playlistId');
        this.title = navParams.get('title');
    }
    YoutubePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad YoutubePage');
        // this.events.publish('pauseAudio', {reason:'entering videos page'});
    };
    YoutubePage.prototype.ngOnInit = function () {
        var _this = this;
        this.logger.setCurrentScreen('Youtube');
        this.youtubeService.getVideos(this.playlistId)
            .subscribe(function (result) {
            _this.videos = result.items;
        }, function (error) {
        }, function () { });
    };
    YoutubePage.prototype.loadVideo = function (video) {
        // this.navCtrl.push('YoutubeVideoPage', {
        //   video: video
        // });
        this.modalCtrl.create('YoutubeVideoPage', {
            video: video
        }).present();
    };
    YoutubePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-youtube',template:/*ion-inline-start:"/Users/earth/Documents/labs/saibisa_v2/src/pages/youtube/youtube.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only class="menu-button">\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!-- <ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle icon-only>\n			<ion-icon name=\'menu\'></ion-icon>\n		</button>\n		<ion-title>{{\'YOUTUBE_CHANNEL\' | translate}}</ion-title>\n	</ion-navbar>\n</ion-header> -->\n\n<ion-content>\n  <ion-list>\n    <ion-item text-wrap *ngFor="let video of videos" (tap)="loadVideo(video)">\n      <ion-thumbnail item-left *ngIf="video.snippet.thumbnails.default.url">\n        <img [src]="video.snippet.thumbnails.default.url">\n      </ion-thumbnail>\n      <h2 [innerHTML]="video.snippet.title"></h2>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/earth/Documents/labs/saibisa_v2/src/pages/youtube/youtube.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_youtube_service__["a" /* YoutubeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_youtube_service__["a" /* YoutubeService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__app_shared_services_flamelink_service__["a" /* FlamelinkService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_event_logger_event_logger__["a" /* EventLoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], YoutubePage);
    return YoutubePage;
}());

//# sourceMappingURL=youtube.js.map

/***/ }),

/***/ 911:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_config__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var YoutubeService = /** @class */ (function () {
    function YoutubeService(http, config) {
        this.http = http;
        this.config = config;
        this.youtubeKey = config.youtubeKey;
        this.apiUrl = config.youtubeApiUrl;
        this.username = config.youtubeUsername;
        this.channelId = config.youtubeChannelId;
        this.results = config.youtubeResults;
        this.videosUrl = this.apiUrl + 'playlistItems?part=snippet&key=' + this.youtubeKey + '&order=date&maxResults=' + this.results;
        this.playlistsUrl = this.apiUrl + 'channels?part=contentDetails&key=' + this.youtubeKey;
        this.channelsUrl = this.apiUrl + 'search?part=snippet&key=' + this.youtubeKey + '&order=date&maxResults=' + this.results + '&channelId=' + this.channelId;
    }
    YoutubeService.prototype.getPlaylistId = function () {
        var url = this.playlistsUrl + '&forUsername=' + this.username;
        return this.http.get(url)
            .map(function (result) {
            return result.json();
        });
    };
    YoutubeService.prototype.getVideos = function (playlistId) {
        var url = this.videosUrl + '&playlistId=' + playlistId;
        return this.http.get(url)
            .map(function (result) {
            return result.json();
        });
    };
    YoutubeService.prototype.getChannel = function () {
        var url = this.channelsUrl;
        return this.http.get(url)
            .map(function (result) {
            return result.json();
        });
    };
    YoutubeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* Config */]])
    ], YoutubeService);
    return YoutubeService;
}());

//# sourceMappingURL=youtube.service.js.map

/***/ })

});
//# sourceMappingURL=1.js.map