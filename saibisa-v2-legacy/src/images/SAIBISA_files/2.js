webpackJsonp([2],{

/***/ 862:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlePageModule", function() { return ArticlePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__article__ = __webpack_require__(887);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_photo_viewer__ = __webpack_require__(885);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ArticlePageModule = /** @class */ (function () {
    function ArticlePageModule() {
    }
    ArticlePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__article__["a" /* ArticlePage */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__article__["a" /* ArticlePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__article__["a" /* ArticlePage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_photo_viewer__["a" /* PhotoViewer */]
            ]
        })
    ], ArticlePageModule);
    return ArticlePageModule;
}());

//# sourceMappingURL=article.module.js.map

/***/ }),

/***/ 885:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoViewer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(42);
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


/**
 * @name Photo Viewer
 * @description This plugin can display your image in full screen with the ability to pan, zoom, and share the image.
 * @usage
 * ```typescript
 * import { PhotoViewer } from '@ionic-native/photo-viewer';
 *
 * constructor(private photoViewer: PhotoViewer) { }
 *
 * ...
 *
 * this.photoViewer.show('https://mysite.com/path/to/image.jpg');
 *
 * this.photoViewer.show('https://mysite.com/path/to/image.jpg', 'My image title', {share: false});
 * ```
 */
var PhotoViewer = (function (_super) {
    __extends(PhotoViewer, _super);
    function PhotoViewer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Shows an image in full screen
     * @param url {string} URL or path to image
     * @param title {string}
     * @param options {PhotoViewerOptions}
     */
    /**
       * Shows an image in full screen
       * @param url {string} URL or path to image
       * @param title {string}
       * @param options {PhotoViewerOptions}
       */
    PhotoViewer.prototype.show = /**
       * Shows an image in full screen
       * @param url {string} URL or path to image
       * @param title {string}
       * @param options {PhotoViewerOptions}
       */
    function (url, title, options) { };
    PhotoViewer.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object]),
        __metadata("design:returntype", void 0)
    ], PhotoViewer.prototype, "show", null);
    /**
     * @name Photo Viewer
     * @description This plugin can display your image in full screen with the ability to pan, zoom, and share the image.
     * @usage
     * ```typescript
     * import { PhotoViewer } from '@ionic-native/photo-viewer';
     *
     * constructor(private photoViewer: PhotoViewer) { }
     *
     * ...
     *
     * this.photoViewer.show('https://mysite.com/path/to/image.jpg');
     *
     * this.photoViewer.show('https://mysite.com/path/to/image.jpg', 'My image title', {share: false});
     * ```
     */
    PhotoViewer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* Plugin */])({
            pluginName: 'PhotoViewer',
            plugin: 'com-sarriaroman-photoviewer',
            pluginRef: 'PhotoViewer',
            repo: 'https://github.com/sarriaroman/photoviewer',
            platforms: ['Android', 'iOS']
        })
    ], PhotoViewer);
    return PhotoViewer;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 887:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_services_flamelink_service__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_event_logger_event_logger__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_photo_viewer__ = __webpack_require__(885);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_images_images__ = __webpack_require__(514);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ArticlePage = /** @class */ (function () {
    function ArticlePage(navCtrl, navParams, _fl, logger, images, photoViewer, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._fl = _fl;
        this.logger = logger;
        this.images = images;
        this.photoViewer = photoViewer;
        this.modalCtrl = modalCtrl;
        this.title = 'Article';
        this.currentIndex = 0;
        this.articleId = navParams.get('articleId');
        if (this.navParams.get('modal')) {
            this.modal = true;
        }
        else {
            this.modal = false;
        }
    }
    ArticlePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ArticlePage');
    };
    ArticlePage.prototype.ngOnInit = function () {
        var _this = this;
        this.logger.setCurrentScreen(this.title);
        //{ populate: true }
        var options = {
            populate: [
                {
                    field: 'heroImage'
                },
                {
                    field: 'imageDeck',
                    subFields: ['image']
                },
                {
                    field: 'posts',
                    subFields: ['thumbnail']
                }
            ]
        };
        this._fl.getApp().content.get('article', this.articleId, options)
            .then(function (data) {
            console.log('articlePage, content', data);
            _this.handleResponse(data);
        })
            .catch(function (error) {
            console.error('articlePage, error', error);
        });
    };
    ArticlePage.prototype.handleResponse = function (data) {
        var _this = this;
        try {
            this.title = data.title;
            this.content = data.content;
            if (data.heroImage && data.heroImage.length > 0) {
                this.heroImage = data.heroImage[0].url;
            }
            if (data.imageDeck && data.imageDeck.length > 0) {
                var temp_1 = [];
                data.imageDeck.forEach(function (element) {
                    temp_1.push({
                        image: _this.popValue(element.image, 'url', 'assets/imgs/default.png'),
                        title: element.title,
                        description: element.description,
                    });
                    // console.log('articlePage, temp', temp);
                });
                this.imageDeck = temp_1;
            }
            this.images.set(this.imageDeck);
            if (data.posts && data.posts.length > 0) {
                var temp1_1 = [];
                data.posts.forEach(function (element) {
                    temp1_1.push({
                        thumbnail: _this.popValue(element.thumbnail, 'url', 'assets/imgs/default.png'),
                        articleId: element.article,
                        description: element.excerpt
                    });
                });
                this.posts = temp1_1;
                // console.log('articlePage, temp1', temp1);
            }
            if (data.disclaimerText) {
                this.disclaimer = true;
                this.disclaimerText = data.disclaimerText;
            }
            else {
                this.disclaimer = false;
                this.disclaimerText = '';
            }
        }
        catch (error) {
            console.log('articlePage, error', error);
        }
    };
    ArticlePage.prototype.popValue = function (ary, key, defult) {
        return (ary[0] && ary[0][key]) ? ary[0][key] : defult;
    };
    ArticlePage.prototype.loadPost = function (post) {
        this.logger.logActivityEvent({ page: 'ArticlePage', action: 'loadPost', articleId: post.articleId });
        this.modalCtrl.create('ArticlePage', {
            articleId: post.articleId,
            modal: true
        }).present();
    };
    ArticlePage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    ArticlePage.prototype.openImage = function (imgUrl) {
        this.photoViewer.show(imgUrl);
    };
    ArticlePage.prototype.openImageSlider = function (index) {
        this.logger.logActivityEvent({ page: 'ArticlePage', action: 'openImageSlider', index: index });
        this.modalCtrl.create('ImageSliderPage', {
            index: index
        }).present();
    };
    ArticlePage.prototype.onSlideChanged = function () {
        this.currentIndex = this.slides.getActiveIndex();
        console.log('Slide changed! Current index is', this.currentIndex);
    };
    ArticlePage.prototype.nextSlide = function () {
        this.slides.slideNext();
    };
    ArticlePage.prototype.previousSlide = function () {
        this.slides.slidePrev();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Slides */])
    ], ArticlePage.prototype, "slides", void 0);
    ArticlePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-article',template:/*ion-inline-start:"/Users/earth/Documents/labs/saibisa_v2/src/pages/article/article.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle icon-only class="menu-button" *ngIf="!modal">\n        <ion-icon name=\'menu\'></ion-icon>\n      </button>\n      <ion-title>{{title}}</ion-title>\n      <ion-buttons end *ngIf="modal">\n          <button ion-button (tap)="closeModal()" class="close close-modal">\n              <ion-icon item-right name="ios-close-outline"></ion-icon>\n          </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-card>\n      <ion-card-content class="banner-container" text-wrap>\n        <img *ngIf="heroImage" [src]="heroImage" />\n        <p padding *ngIf="content" padding [innerHTML]="content"></p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-list *ngIf="posts">\n      <ion-item text-wrap *ngFor="let post of posts" (tap)="loadPost(post)">\n        <ion-thumbnail item-left *ngIf="post.thumbnail">\n            <img [src]="post.thumbnail" />\n        </ion-thumbnail>\n        <p [innerHTML]="post.description"></p>\n      </ion-item>\n    </ion-list>\n  \n    <!-- <ion-card *ngFor="let imageElement of imageDeck">\n      <img [src]="imageElement.image">\n      <ion-card-content>\n          <p [innerHTML]="imageElement.title"></p>\n          <p [innerHTML]="imageElement.description"></p>\n      </ion-card-content>\n    </ion-card> -->\n<!-- \n    <ion-card *ngIf="imageDeck">\n      \n        <ion-grid>\n          <ion-row>\n            <ion-col col-6 col-md-4 col-xl-3 *ngFor="let imageElement of imageDeck">\n            <div class="image-container" (click)="openImage(imageElement.image)">\n              <img [src]="imageElement.image">\n              <p [innerHTML]="imageElement.title"></p>\n              <p [innerHTML]="imageElement.description"></p>\n            </div>\n            </ion-col>\n          </ion-row>\n          </ion-grid>\n      </ion-card> -->\n      <ion-slides \n        class="image-slider" \n        effect="fade"\n        *ngIf="imageDeck" #slides (ionSlideWillChange)="onSlideChanged()">\n        <ion-slide *ngFor="let imageElement of imageDeck; index as i" \n          parallax="true" \n          (tap)="openImageSlider(i)"\n          padding>\n            <img [src]="imageElement.image">\n        </ion-slide>\n         <div *ngIf="currentIndex > 0"\n              class="swiper-button-prev image-slider-arrow-left"\n              (tap)="previousSlide()"></div>\n         <div *ngIf="currentIndex < imageDeck.length-1"\n              class="swiper-button-next image-slider-arrow-right"\n              (tap)="nextSlide()"></div>\n\n      </ion-slides>\n\n      <ion-card *ngIf="disclaimer">\n          <ion-card-content>\n              <p>\n                  {{disclaimerText}}\n              </p>\n          </ion-card-content>\n        </ion-card>\n  </ion-content>'/*ion-inline-end:"/Users/earth/Documents/labs/saibisa_v2/src/pages/article/article.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__app_shared_services_flamelink_service__["a" /* FlamelinkService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_event_logger_event_logger__["a" /* EventLoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_images_images__["a" /* ImagesProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_photo_viewer__["a" /* PhotoViewer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]])
    ], ArticlePage);
    return ArticlePage;
}());

//# sourceMappingURL=article.js.map

/***/ })

});
//# sourceMappingURL=2.js.map