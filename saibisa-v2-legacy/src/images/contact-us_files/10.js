webpackJsonp([10],{

/***/ 875:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodcastPageModule", function() { return PodcastPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__podcast__ = __webpack_require__(902);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PodcastPageModule = /** @class */ (function () {
    function PodcastPageModule() {
    }
    PodcastPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__podcast__["a" /* PodcastPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__podcast__["a" /* PodcastPage */]),
            ],
        })
    ], PodcastPageModule);
    return PodcastPageModule;
}());

//# sourceMappingURL=podcast.module.js.map

/***/ }),

/***/ 902:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PodcastPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_shared_services_flamelink_service__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_event_logger_event_logger__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_audio_audio__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_store_store__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_operators__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_music_controls__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_is_cordova_available__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var PodcastPage = /** @class */ (function () {
    function PodcastPage(navCtrl, navParams, platform, loadingCtrl, audioProvider, events, store, _fl, logger, musicControls) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.audioProvider = audioProvider;
        this.events = events;
        this.store = store;
        this._fl = _fl;
        this.logger = logger;
        this.musicControls = musicControls;
        this.title = 'Chords of Consciousness1';
        this.subTitle = 'Let us Chant Sai Sai Sai';
        this.files = [];
        this.seekbar = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]("seekbar");
        this.state = {};
        this.currentFile = {};
        this.displayFooter = "inactive";
        platform.ready().then(function () {
            platform.pause.subscribe(function (result) {
                //this.pauseSilent();
            });
            platform.resume.subscribe(function (result) {
                //this.playSilent();
            });
        });
    }
    PodcastPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PodcastPage');
        // this.pauseSilent();
    };
    PodcastPage.prototype.ionViewWillLeave = function () {
        console.log('ionViewWillLeave PodcastPage');
        //this.pauseSilent();
    };
    PodcastPage.prototype.ngOnInit = function () {
        var _this = this;
        this.logger.setCurrentScreen(this.title);
        // let loader = this.presentLoading();
        this._fl.getApp().content.get('music', { populate: true })
            .then(function (data) {
            console.log('music, content', data);
            _this.processResponse(data);
            // loader.dismiss();
        })
            .catch(function (error) {
            console.error('music, error', error);
        });
        // this.events.subscribe('pauseAudio', (object) => {
        //   console.log(object);
        //   this.pauseSilent();
        // });
        // this.events.subscribe('freeAudio', (object) => {
        //   this.pauseSilent();
        // });
        // this.events.subscribe('navigationEvent', (object) => {
        //   this.pauseSilent();
        // });
        // this.events.subscribe('tab-switch', (object) => {
        //   this.pauseSilent();
        // });
    };
    PodcastPage.prototype.processResponse = function (data) {
        var _this = this;
        try {
            this.title = data.pageTitle;
            this.subTitle = data.subTitle;
            data.songs.forEach(function (ele) {
                console.log(ele.song[0].file);
                _this.files.push({
                    url: ele.song[0].url,
                    name: ele.title,
                    title: ele.title,
                    artist: ele.artist,
                    composer: ele.composer,
                    lyricist: ele.lyricist,
                    highlight: ele.highlight,
                    launchMessage: ele.launchMessage,
                });
            });
        }
        catch (error) {
            console.error('chordsOfConsciousness, error', error);
        }
    };
    PodcastPage.prototype.presentLoading = function () {
        var loading = this.loadingCtrl.create({
            content: 'Loading Content. Please Wait...'
        });
        loading.present();
        return loading;
    };
    PodcastPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.store.select('appState').subscribe(function (value) {
            _this.state = value.media;
        });
        // Resize the Content Screen so that Ionic is aware of footer
        this.store
            .select('appState')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators__["pluck"])('media', 'canplay'), Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators__["filter"])(function (value) { return value === true; }))
            .subscribe(function () {
            _this.displayFooter = 'active';
            _this.content.resize();
        });
        // Updating the Seekbar based on currentTime
        this.store
            .select('appState')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators__["pluck"])('media', 'timeSec'), Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators__["filter"])(function (value) { return value !== undefined; }), Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators__["map"])(function (value) { return Number.parseInt(value); }), Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators__["distinctUntilChanged"])())
            .subscribe(function (value) {
            _this.seekbar.setValue(value);
        });
    };
    PodcastPage.prototype.openFile = function (file, index) {
        this.logger.logActivityEvent({ page: this.title, action: 'openFile', file: file, index: index });
        this.currentFile = { index: index, file: file };
        this.playStream(file.url);
        if (Object(__WEBPACK_IMPORTED_MODULE_11__common_is_cordova_available__["a" /* isCordovaAvailable */])()) {
            this.createLoclScreenControls(file);
        }
    };
    PodcastPage.prototype.resetState = function () {
        this.audioProvider.stop();
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_8__providers_store_store__["e" /* RESET */] });
    };
    PodcastPage.prototype.playStream = function (url) {
        var _this = this;
        this.logger.logActivityEvent({ page: this.title, action: 'playStream', url: url });
        this.resetState();
        this.audioProvider.playStream(url).subscribe(function (event) {
            var audioObj = event.target;
            switch (event.type) {
                case 'canplay':
                    return _this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_8__providers_store_store__["a" /* CANPLAY */], payload: { value: true } });
                case 'loadedmetadata':
                    return _this.store.dispatch({
                        type: __WEBPACK_IMPORTED_MODULE_8__providers_store_store__["b" /* LOADEDMETADATA */],
                        payload: {
                            value: true,
                            data: {
                                time: _this.audioProvider.formatTime(audioObj.duration * 1000, 'HH:mm:ss'),
                                timeSec: audioObj.duration,
                                mediaType: 'mp3'
                            }
                        }
                    });
                case 'playing':
                    return _this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_8__providers_store_store__["d" /* PLAYING */], payload: { value: true } });
                case 'pause':
                    return _this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_8__providers_store_store__["d" /* PLAYING */], payload: { value: false } });
                case 'timeupdate':
                    return _this.store.dispatch({
                        type: __WEBPACK_IMPORTED_MODULE_8__providers_store_store__["f" /* TIMEUPDATE */],
                        payload: {
                            timeSec: audioObj.currentTime,
                            time: _this.audioProvider.formatTime(audioObj.currentTime * 1000, 'HH:mm:ss')
                        }
                    });
                case 'loadstart':
                    return _this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_8__providers_store_store__["c" /* LOADSTART */], payload: { value: true } });
            }
        });
    };
    PodcastPage.prototype.pause = function () {
        this.logger.logActivityEvent({ page: this.title, action: 'pause' });
        this.audioProvider.pause();
        if (Object(__WEBPACK_IMPORTED_MODULE_11__common_is_cordova_available__["a" /* isCordovaAvailable */])()) {
            this.musicControls.listen();
            this.musicControls.updateIsPlaying(false);
        }
    };
    PodcastPage.prototype.pauseSilent = function () {
        try {
            this.logger.logActivityEvent({ page: this.title, action: 'pauseSilent' });
            this.audioProvider.pause();
        }
        catch (e) { }
    };
    PodcastPage.prototype.play = function () {
        if (!this.currentFile.index) {
            this.openFile(this.files[0], 0);
            return;
        }
        this.logger.logActivityEvent({ page: this.title, action: 'play' });
        this.audioProvider.play();
        if (Object(__WEBPACK_IMPORTED_MODULE_11__common_is_cordova_available__["a" /* isCordovaAvailable */])()) {
            this.musicControls.listen();
            this.musicControls.updateIsPlaying(true);
        }
    };
    PodcastPage.prototype.playSilent = function () {
        try {
            this.logger.logActivityEvent({ page: this.title, action: 'playSilent' });
            this.audioProvider.play();
        }
        catch (e) { }
    };
    PodcastPage.prototype.stop = function () {
        this.logger.logActivityEvent({ page: this.title, action: 'stop' });
        this.audioProvider.stop();
    };
    PodcastPage.prototype.next = function () {
        this.logger.logActivityEvent({ page: this.title, action: 'next' });
        var index = this.currentFile.index + 1;
        var file = this.files[index];
        this.openFile(file, index);
    };
    PodcastPage.prototype.previous = function () {
        this.logger.logActivityEvent({ page: this.title, action: 'previous' });
        var index = this.currentFile.index - 1;
        var file = this.files[index];
        this.openFile(file, index);
    };
    PodcastPage.prototype.isFirstPlaying = function () {
        return this.currentFile.index === 0;
    };
    PodcastPage.prototype.isLastPlaying = function () {
        return this.currentFile.index === this.files.length - 1;
    };
    PodcastPage.prototype.onSeekStart = function () {
        this.onSeekState = this.state.playing;
        if (this.onSeekState) {
            this.pause();
        }
    };
    PodcastPage.prototype.onSeekEnd = function (event) {
        if (this.onSeekState) {
            this.audioProvider.seekTo(event.value);
            this.play();
        }
        else {
            this.audioProvider.seekTo(event.value);
        }
    };
    PodcastPage.prototype.reset = function () {
        this.resetState();
        this.currentFile = {};
        this.displayFooter = "inactive";
    };
    PodcastPage.prototype.createLoclScreenControls = function (track) {
        var _this = this;
        this.musicControls.create({
            track: track.name,
            artist: track.artist,
            cover: 'assets/imgs/default.png',
            isPlaying: true,
            dismissable: true,
            hasPrev: !this.isFirstPlaying(),
            hasNext: !this.isLastPlaying(),
            // iOS only, optional
            album: 'Absolution',
            duration: 60,
            elapsed: 10,
            hasSkipForward: false,
            hasSkipBackward: false,
            skipForwardInterval: 15,
            skipBackwardInterval: 15,
            hasScrubbing: false,
            // Android only, optional
            ticker: "Now playing \"" + track.name + "\"",
            playIcon: 'media_play',
            pauseIcon: 'media_pause',
            prevIcon: 'media_prev',
            nextIcon: 'media_next',
            closeIcon: 'media_close',
            notificationIcon: 'notification'
        });
        this.musicControls.subscribe().subscribe(function (action) {
            console.log('action', action);
            var message = JSON.parse(action).message;
            console.log('message', message);
            switch (message) {
                case 'music-controls-next':
                    _this.next();
                    break;
                case 'music-controls-previous':
                    _this.previous();
                    break;
                case 'music-controls-pause':
                    // Do something
                    console.log('music pause');
                    _this.pause();
                    break;
                case 'music-controls-play':
                    // Do something
                    console.log('music play');
                    _this.play();
                    break;
                case 'music-controls-destroy':
                    _this.reset();
                    break;
                // External controls (iOS only)
                case 'music-controls-toggle-play-pause':
                    // Do something
                    break;
                case 'music-controls-seek-to':
                    // Do something
                    break;
                case 'music-controls-skip-forward':
                    // Do something
                    break;
                case 'music-controls-skip-backward':
                    // Do something
                    break;
                // Headset events (Android only)
                // All media button events are listed below
                case 'music-controls-media-button':
                    // Do something
                    break;
                case 'music-controls-headset-unplugged':
                    break;
                case 'music-controls-headset-plugged':
                    // Do something
                    break;
                default:
                    break;
            }
        });
        this.musicControls.listen(); // activates the observable above
        this.musicControls.updateIsPlaying(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* Navbar */])
    ], PodcastPage.prototype, "navBar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Content */])
    ], PodcastPage.prototype, "content", void 0);
    PodcastPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-podcast',template:/*ion-inline-start:"/Users/earth/Documents/labs/saibisa_v2/src/pages/podcast/podcast.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle icon-only class="menu-button">\n        <ion-icon name=\'menu\'></ion-icon>\n      </button>\n      <ion-title>{{title}}</ion-title>\n    </ion-navbar>\n    <ion-toolbar>\n        <ion-title>{{subTitle}}</ion-title>\n      </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <ng-template >\n      <div padding id="app-section" text-center>\n        <ion-icon color="primary" name="musical-notes"></ion-icon>\n        <h2 id="app-title" [textContent]="title">Chords of Consciousness</h2>\n        <button outline ion-button block color="primary" *ngIf="!loggedIn" (tap)="login()">Log In</button>\n      </div>\n    </ng-template>\n  \n    <ion-list *ngIf="files.length">\n        <!-- <ion-scroll> -->\n          <ng-container *ngFor="let file of files; let i = index; let first = first">\n            <div class="box">\n              <!-- <div *ngIf="first && file.newLaunchFlag" class="corner-ribbon">New Release</div> -->\n\n                <ion-item text-wrap (tap)="openFile(file, i)" [ngClass]="{\'new\' : file.highlight}">\n                <ion-icon color="primary" item-start name="musical-note"></ion-icon>\n                \n                <p class="music_launch">{{ file.launchMessage }}</p>\n                <h2 class="track_title">{{ file.name }}</h2>\n                <p *ngIf="file.artist">Singer: {{ file.artist }}</p>\n                <p *ngIf="file.composer">Composer: {{ file.composer }}</p>\n                <p *ngIf="file.lyricist">Lyricist: {{ file.lyricist }}</p>\n                <p item-end *ngIf="currentFile.index === i">SELECTED</p>\n                <ion-icon item-end name="play" *ngIf="currentFile.index !== i"></ion-icon>\n              </ion-item>\n            </div>\n          </ng-container>\n        <!-- </ion-scroll> -->\n    </ion-list>\n  </ion-content>\n\n  <ion-footer>\n      <ion-toolbar color="primary">\n          <ion-range min="0" color="light" [max]="state.durationSec" [formControl]="seekbar" (ionFocus)="onSeekStart()" (ionBlur)="onSeekEnd($event)"\n            name="seekbar">\n            <ion-label color="light" range-left>{{ state.time }}</ion-label>\n            <ion-label color="light" range-right>{{ state.duration }}</ion-label>\n          </ion-range>\n        </ion-toolbar>\n        <ion-toolbar color="primary">\n            <ion-grid>\n              <ion-row align-items-center id="media-controls">\n                <button clear ion-col ion-button [disabled]="isFirstPlaying()" (tap)="previous()">\n                  <ion-icon color="light" name="skip-backward"> </ion-icon>\n                </button>\n                <button clear ion-col ion-button *ngIf="!state.playing" (tap)="play()">\n                  <ion-icon color="light" name="play"></ion-icon>\n                </button>\n                <button clear ion-col ion-button *ngIf="!!state.playing" (tap)="pause()">\n                  <ion-icon color="light" name="pause"></ion-icon>\n                </button>\n                <button clear ion-col ion-button [disabled]="isLastPlaying()" (tap)="next()">\n                  <ion-icon color="light" name="skip-forward"></ion-icon>\n                </button>\n              </ion-row>\n            </ion-grid>\n          </ion-toolbar>\n        </ion-footer>'/*ion-inline-end:"/Users/earth/Documents/labs/saibisa_v2/src/pages/podcast/podcast.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('showHide', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        opacity: 1
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        opacity: 0
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('250ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('250ms ease-out'))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('animateState', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        backgroundColor: 'red'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        backgroundColor: 'yellow'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('* => *', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(2000))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_audio_audio__["a" /* AudioProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["a" /* Store */],
            __WEBPACK_IMPORTED_MODULE_4__app_shared_services_flamelink_service__["a" /* FlamelinkService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_event_logger_event_logger__["a" /* EventLoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_music_controls__["a" /* MusicControls */]])
    ], PodcastPage);
    return PodcastPage;
}());

//# sourceMappingURL=podcast.js.map

/***/ })

});
//# sourceMappingURL=10.js.map