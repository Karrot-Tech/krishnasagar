webpackJsonp([24],{

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isCordovaAvailable; });
var isCordovaAvailable = function () {
    if (!window.cordova) {
        console.log('This is a native feature. Please use a device');
        return false;
    }
    return true;
};
//# sourceMappingURL=is-cordova-available.js.map

/***/ }),

/***/ 184:
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
webpackEmptyAsyncContext.id = 184;

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/article/article.module": [
		862,
		2
	],
	"../pages/book/book.module": [
		861,
		23
	],
	"../pages/cards/cards.module": [
		863,
		22
	],
	"../pages/contact/contact.module": [
		864,
		21
	],
	"../pages/dijaan/dijaan.module": [
		865,
		20
	],
	"../pages/donate/donate.module": [
		866,
		19
	],
	"../pages/healing/healing.module": [
		867,
		18
	],
	"../pages/home/home.module": [
		869,
		0
	],
	"../pages/image-slider/image-slider.module": [
		868,
		17
	],
	"../pages/initiatives/initiatives.module": [
		870,
		16
	],
	"../pages/item-create/item-create.module": [
		871,
		15
	],
	"../pages/item-detail/item-detail.module": [
		872,
		14
	],
	"../pages/list-master/list-master.module": [
		873,
		13
	],
	"../pages/login/login.module": [
		874,
		12
	],
	"../pages/menu/menu.module": [
		877,
		11
	],
	"../pages/podcast/podcast.module": [
		875,
		10
	],
	"../pages/search/search.module": [
		876,
		9
	],
	"../pages/settings/settings.module": [
		878,
		8
	],
	"../pages/signup/signup.module": [
		879,
		7
	],
	"../pages/tabs/tabs.module": [
		881,
		6
	],
	"../pages/update/update.module": [
		880,
		5
	],
	"../pages/welcome/welcome.module": [
		882,
		4
	],
	"../pages/youtube-video/youtube-video.module": [
		884,
		3
	],
	"../pages/youtube/youtube.module": [
		883,
		1
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
webpackAsyncContext.id = 251;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
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
 * Api is a generic REST Api handler. Set your API url first.
 */
var Api = /** @class */ (function () {
    function Api(http) {
        this.http = http;
        this.url = 'https://example.com/api/v1';
    }
    Api.prototype.get = function (endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]()
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.post = function (endpoint, body, reqOpts) {
        return this.http.post(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.put = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.delete = function (endpoint, reqOpts) {
        return this.http.delete(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.patch = function (endpoint, body, reqOpts) {
        return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
    };
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], Api);
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Items; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_item__ = __webpack_require__(833);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Items = /** @class */ (function () {
    function Items() {
        this.items = [];
        this.defaultItem = {
            "name": "Burt Bear",
            "profilePic": "assets/img/speakers/bear.jpg",
            "about": "Burt is a Bear.",
        };
        var items = [
            {
                "name": "Burt Bear",
                "profilePic": "assets/img/speakers/bear.jpg",
                "about": "Burt is a Bear."
            },
            {
                "name": "Charlie Cheetah",
                "profilePic": "assets/img/speakers/cheetah.jpg",
                "about": "Charlie is a Cheetah."
            },
            {
                "name": "Donald Duck",
                "profilePic": "assets/img/speakers/duck.jpg",
                "about": "Donald is a Duck."
            },
            {
                "name": "Eva Eagle",
                "profilePic": "assets/img/speakers/eagle.jpg",
                "about": "Eva is an Eagle."
            },
            {
                "name": "Ellie Elephant",
                "profilePic": "assets/img/speakers/elephant.jpg",
                "about": "Ellie is an Elephant."
            },
            {
                "name": "Molly Mouse",
                "profilePic": "assets/img/speakers/mouse.jpg",
                "about": "Molly is a Mouse."
            },
            {
                "name": "Paul Puppy",
                "profilePic": "assets/img/speakers/puppy.jpg",
                "about": "Paul is a Puppy."
            }
        ];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            this.items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item__["a" /* Item */](item));
        }
    }
    Items.prototype.query = function (params) {
        if (!params) {
            return this.items;
        }
        return this.items.filter(function (item) {
            for (var key in params) {
                var field = item[key];
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                    return item;
                }
                else if (field == params[key]) {
                    return item;
                }
            }
            return null;
        });
    };
    Items.prototype.add = function (item) {
        this.items.push(item);
    };
    Items.prototype.delete = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    Items = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Items);
    return Items;
}());

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventLoggerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_firebase_analytics__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_is_cordova_available__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventLoggerProvider = /** @class */ (function () {
    function EventLoggerProvider(http, firebaseAnalytics) {
        this.http = http;
        this.firebaseAnalytics = firebaseAnalytics;
        if (Object(__WEBPACK_IMPORTED_MODULE_3__common_is_cordova_available__["a" /* isCordovaAvailable */])()) {
            firebaseAnalytics.setEnabled(true)
                .then(function (res) { return console.log("Success, setEnabled", res); })
                .catch(function (error) { return console.error(error); });
        }
    }
    EventLoggerProvider.prototype.logButton = function (name, value) {
        if (Object(__WEBPACK_IMPORTED_MODULE_3__common_is_cordova_available__["a" /* isCordovaAvailable */])()) {
            this.firebaseAnalytics.logEvent('page_view', { page: "dashboard" })
                .then(function (res) { return console.log("Success, page_view", res); })
                .catch(function (error) { return console.error(error); });
        }
    };
    EventLoggerProvider.prototype.logActivityEvent = function (value) {
        this.logEvent('activity', value);
    };
    EventLoggerProvider.prototype.logForceUpdateEvent = function (value) {
        this.logEvent('force-update', value);
    };
    EventLoggerProvider.prototype.logEvent = function (name, value) {
        if (Object(__WEBPACK_IMPORTED_MODULE_3__common_is_cordova_available__["a" /* isCordovaAvailable */])()) {
            this.firebaseAnalytics.logEvent(name, value)
                .then(function (res) { return console.log("Success, logEvent", res); })
                .catch(function (error) { return console.error(error); });
        }
    };
    EventLoggerProvider.prototype.setCurrentScreen = function (name) {
        if (Object(__WEBPACK_IMPORTED_MODULE_3__common_is_cordova_available__["a" /* isCordovaAvailable */])()) {
            this.firebaseAnalytics.setCurrentScreen(name)
                .then(function (res) { return console.log("Success, setCurrentScreen", res); })
                .catch(function (error) { return console.error(error); });
        }
    };
    EventLoggerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */]])
    ], EventLoggerProvider);
    return EventLoggerProvider;
}());

//# sourceMappingURL=event-logger.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlamelinkService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_flamelink__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_flamelink___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_flamelink__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var FlamelinkService = /** @class */ (function () {
    function FlamelinkService(_fb) {
        this._fb = _fb;
        var config = {
            firebaseApp: this._fb,
            env: 'production',
            locale: 'en-US'
        };
        this.flApp = __WEBPACK_IMPORTED_MODULE_2_flamelink__(config);
    }
    Object.defineProperty(FlamelinkService.prototype, "flApp", {
        get: function () {
            return this._flApp;
        },
        set: function (value) {
            this._flApp = value;
        },
        enumerable: true,
        configurable: true
    });
    FlamelinkService.prototype.getApp = function () {
        return this.flApp;
    };
    FlamelinkService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3_angularfire2__["FirebaseApp"])),
        __metadata("design:paramtypes", [Object])
    ], FlamelinkService);
    return FlamelinkService;
}());

//# sourceMappingURL=flamelink.service.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(345);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__ = __webpack_require__(346);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(834);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(835);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__user_user__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FirstRunPage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Tab1Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Tab2Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Tab3Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Tab4Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Tab5Root; });
// The page the user lands on after opening the app and without a session
var FirstRunPage = 'TutorialPage';
// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
var MainPage = 'TabsPage';
// The initial root pages for our tabs (remove if not using tabs)
var Tab1Root = 'HomePage';
var Tab2Root = 'ArticlePage';
var Tab3Root = 'InitiativesPage';
var Tab4Root = 'HealingPage';
var Tab5Root = 'PodcastPage';
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImagesProvider = /** @class */ (function () {
    function ImagesProvider(http) {
        this.http = http;
        console.log('Hello ImagesProvider Provider');
    }
    ImagesProvider.prototype.set = function (images) {
        this.images = images;
    };
    ImagesProvider.prototype.get = function () {
        return this.images;
    };
    ImagesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ImagesProvider);
    return ImagesProvider;
}());

//# sourceMappingURL=images.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AudioProvider = /** @class */ (function () {
    function AudioProvider() {
        this.stop$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.audioObj = new Audio();
    }
    AudioProvider.prototype.streamObservable = function (url) {
        var _this = this;
        var events = [
            'ended', 'error', 'play', 'playing', 'pause', 'timeupdate', 'canplay', 'loadedmetadata', 'loadstart'
        ];
        var addEvents = function (obj, events, handler) {
            events.forEach(function (event) {
                obj.addEventListener(event, handler);
            });
        };
        var removeEvents = function (obj, events, handler) {
            events.forEach(function (event) {
                obj.removeEventListener(event, handler);
            });
        };
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (observer) {
            // Play audio
            _this.audioObj.src = url;
            _this.audioObj.load();
            _this.audioObj.play();
            // Media Events
            var handler = function (event) { return observer.next(event); };
            addEvents(_this.audioObj, events, handler);
            return function () {
                // Stop Playing
                _this.audioObj.pause();
                _this.audioObj.currentTime = 0;
                // Remove EventListeners
                removeEvents(_this.audioObj, events, handler);
            };
        });
    };
    AudioProvider.prototype.playStream = function (url) {
        return this.streamObservable(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["takeUntil"])(this.stop$));
    };
    AudioProvider.prototype.play = function () {
        this.audioObj.play();
    };
    AudioProvider.prototype.pause = function () {
        this.audioObj.pause();
    };
    AudioProvider.prototype.stop = function () {
        this.stop$.next();
    };
    AudioProvider.prototype.seekTo = function (seconds) {
        this.audioObj.currentTime = seconds;
    };
    AudioProvider.prototype.formatTime = function (time, format) {
        return __WEBPACK_IMPORTED_MODULE_3_moment__["utc"](time).format(format);
    };
    AudioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AudioProvider);
    return AudioProvider;
}());

//# sourceMappingURL=audio.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CANPLAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOADEDMETADATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PLAYING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return TIMEUPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOADSTART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return RESET; });
/* harmony export (immutable) */ __webpack_exports__["g"] = mediaStateReducer;
var CANPLAY = 'CANPLAY';
var LOADEDMETADATA = 'LOADEDMETADATA';
var PLAYING = 'PLAYING';
var TIMEUPDATE = 'TIMEUPDATE';
var LOADSTART = 'LOADSTART';
var RESET = 'RESET';
function mediaStateReducer(state, action) {
    var payload = action.payload;
    switch (action.type) {
        case CANPLAY:
            state = Object.assign({}, state);
            state.media.canplay = payload.value;
            return state;
        case LOADEDMETADATA:
            state = Object.assign({}, state);
            state.media.loadedmetadata = payload.value;
            state.media.duration = payload.data.time;
            state.media.durationSec = payload.data.timeSec;
            state.media.mediaType = payload.data.mediaType;
            return state;
        case PLAYING:
            state = Object.assign({}, state);
            state.media.playing = payload.value;
            return state;
        case TIMEUPDATE:
            state = Object.assign({}, state);
            state.media.time = payload.time;
            state.media.timeSec = payload.timeSec;
            return state;
        case LOADSTART:
            state.media.loadstart = payload.value;
            return Object.assign({}, state);
        case RESET:
            state = Object.assign({}, state);
            state.media = {};
            return state;
        default:
            state = {};
            state.media = {};
            return state;
    }
}
//# sourceMappingURL=store.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(526);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_http_loader__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__ = __webpack_require__(855);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_services_flamelink_service__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_services_wordpress_service__ = __webpack_require__(858);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__mocks_providers_items__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__(859);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_firebase_config__ = __webpack_require__(860);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_firebase_analytics__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_event_logger_event_logger__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_audio_audio__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ngrx_store__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_store_store__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_onesignal__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_app_version__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_images_images__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_music_controls__ = __webpack_require__(520);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_9__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
function provideSettings(storage) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    return new __WEBPACK_IMPORTED_MODULE_15__providers__["c" /* Settings */](storage, {
        option1: true,
        option2: 'Ionitron J. Framework',
        option3: '3',
        option4: 'Hello'
    });
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_22__ngrx_store__["b" /* StoreModule */].forRoot({
                    appState: __WEBPACK_IMPORTED_MODULE_23__providers_store_store__["g" /* mediaStateReducer */]
                }),
                __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/book/book.module#BookPageModule', name: 'BookPage', segment: 'book', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/article/article.module#ArticlePageModule', name: 'ArticlePage', segment: 'article', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cards/cards.module#CardsPageModule', name: 'CardsPage', segment: 'cards', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dijaan/dijaan.module#DijaanPageModule', name: 'DijaanPage', segment: 'dijaan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/donate/donate.module#DonatePageModule', name: 'DonatePage', segment: 'donate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/healing/healing.module#HealingPageModule', name: 'HealingPage', segment: 'healing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/image-slider/image-slider.module#ImageSliderPageModule', name: 'ImageSliderPage', segment: 'image-slider', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/initiatives/initiatives.module#InitiativesPageModule', name: 'InitiativesPage', segment: 'initiatives', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-create/item-create.module#ItemCreatePageModule', name: 'ItemCreatePage', segment: 'item-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-detail/item-detail.module#ItemDetailPageModule', name: 'ItemDetailPage', segment: 'item-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-master/list-master.module#ListMasterPageModule', name: 'ListMasterPage', segment: 'list-master', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/podcast/podcast.module#PodcastPageModule', name: 'PodcastPage', segment: 'podcast', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/update/update.module#UpdatePageModule', name: 'UpdatePage', segment: 'update', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/youtube/youtube.module#YoutubePageModule', name: 'YoutubePage', segment: 'youtube', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/youtube-video/youtube-video.module#YoutubeVideoPageModule', name: 'YoutubeVideoPage', segment: 'youtube-video', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_17_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_18__app_firebase_config__["a" /* firebaseConfig */])
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__providers__["a" /* Api */],
                __WEBPACK_IMPORTED_MODULE_14__mocks_providers_items__["a" /* Items */],
                __WEBPACK_IMPORTED_MODULE_15__providers__["d" /* User */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__shared_services_flamelink_service__["a" /* FlamelinkService */],
                __WEBPACK_IMPORTED_MODULE_13__shared_services_wordpress_service__["a" /* WordpressService */],
                { provide: __WEBPACK_IMPORTED_MODULE_15__providers__["c" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]] },
                // Keep this to enable Ionic's runtime error handling during development
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */],
                __WEBPACK_IMPORTED_MODULE_20__providers_event_logger_event_logger__["a" /* EventLoggerProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_audio_audio__["a" /* AudioProvider */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_app_version__["a" /* AppVersion */],
                __WEBPACK_IMPORTED_MODULE_26__providers_images_images__["a" /* ImagesProvider */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_music_controls__["a" /* MusicControls */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or an "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
var Item = /** @class */ (function () {
    function Item(fields) {
        // Quick and dirty extend/assign fields to this model
        for (var f in fields) {
            // @ts-ignore
            this[f] = fields[f];
        }
    }
    return Item;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(104);
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
 * A simple settings/config class for storing key/value pairs with persistence.
 */
var Settings = /** @class */ (function () {
    function Settings(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = '_settings';
        this._defaults = defaults;
    }
    Settings.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    Settings.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    Settings.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    Settings.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    Settings.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    Settings.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            return settings[key];
        });
    };
    Settings.prototype.save = function () {
        return this.setAll(this.settings);
    };
    Object.defineProperty(Settings.prototype, "allSettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    Settings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], Object])
    ], Settings);
    return Settings;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(345);
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
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
var User = /** @class */ (function () {
    function User(api) {
        this.api = api;
    }
    /**
     * Send a POST request to our login endpoint with the data
     * the user entered on the form.
     */
    User.prototype.login = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('login', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
            else {
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Send a POST request to our signup endpoint with the data
     * the user entered on the form.
     */
    User.prototype.signup = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('signup', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Log the user out, which forgets the session
     */
    User.prototype.logout = function () {
        this._user = null;
    };
    /**
     * Process a login/signup response to store user data
     */
    User.prototype._loggedIn = function (resp) {
        this._user = resp.user;
    };
    User = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */]])
    ], User);
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 837:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 347,
	"./af.js": 347,
	"./ar": 348,
	"./ar-dz": 349,
	"./ar-dz.js": 349,
	"./ar-kw": 350,
	"./ar-kw.js": 350,
	"./ar-ly": 351,
	"./ar-ly.js": 351,
	"./ar-ma": 352,
	"./ar-ma.js": 352,
	"./ar-sa": 353,
	"./ar-sa.js": 353,
	"./ar-tn": 354,
	"./ar-tn.js": 354,
	"./ar.js": 348,
	"./az": 355,
	"./az.js": 355,
	"./be": 356,
	"./be.js": 356,
	"./bg": 357,
	"./bg.js": 357,
	"./bm": 358,
	"./bm.js": 358,
	"./bn": 359,
	"./bn.js": 359,
	"./bo": 360,
	"./bo.js": 360,
	"./br": 361,
	"./br.js": 361,
	"./bs": 362,
	"./bs.js": 362,
	"./ca": 363,
	"./ca.js": 363,
	"./cs": 364,
	"./cs.js": 364,
	"./cv": 365,
	"./cv.js": 365,
	"./cy": 366,
	"./cy.js": 366,
	"./da": 367,
	"./da.js": 367,
	"./de": 368,
	"./de-at": 369,
	"./de-at.js": 369,
	"./de-ch": 370,
	"./de-ch.js": 370,
	"./de.js": 368,
	"./dv": 371,
	"./dv.js": 371,
	"./el": 372,
	"./el.js": 372,
	"./en-au": 373,
	"./en-au.js": 373,
	"./en-ca": 374,
	"./en-ca.js": 374,
	"./en-gb": 375,
	"./en-gb.js": 375,
	"./en-ie": 376,
	"./en-ie.js": 376,
	"./en-il": 377,
	"./en-il.js": 377,
	"./en-nz": 378,
	"./en-nz.js": 378,
	"./eo": 379,
	"./eo.js": 379,
	"./es": 380,
	"./es-do": 381,
	"./es-do.js": 381,
	"./es-us": 382,
	"./es-us.js": 382,
	"./es.js": 380,
	"./et": 383,
	"./et.js": 383,
	"./eu": 384,
	"./eu.js": 384,
	"./fa": 385,
	"./fa.js": 385,
	"./fi": 386,
	"./fi.js": 386,
	"./fo": 387,
	"./fo.js": 387,
	"./fr": 388,
	"./fr-ca": 389,
	"./fr-ca.js": 389,
	"./fr-ch": 390,
	"./fr-ch.js": 390,
	"./fr.js": 388,
	"./fy": 391,
	"./fy.js": 391,
	"./gd": 392,
	"./gd.js": 392,
	"./gl": 393,
	"./gl.js": 393,
	"./gom-latn": 394,
	"./gom-latn.js": 394,
	"./gu": 395,
	"./gu.js": 395,
	"./he": 396,
	"./he.js": 396,
	"./hi": 397,
	"./hi.js": 397,
	"./hr": 398,
	"./hr.js": 398,
	"./hu": 399,
	"./hu.js": 399,
	"./hy-am": 400,
	"./hy-am.js": 400,
	"./id": 401,
	"./id.js": 401,
	"./is": 402,
	"./is.js": 402,
	"./it": 403,
	"./it.js": 403,
	"./ja": 404,
	"./ja.js": 404,
	"./jv": 405,
	"./jv.js": 405,
	"./ka": 406,
	"./ka.js": 406,
	"./kk": 407,
	"./kk.js": 407,
	"./km": 408,
	"./km.js": 408,
	"./kn": 409,
	"./kn.js": 409,
	"./ko": 410,
	"./ko.js": 410,
	"./ky": 411,
	"./ky.js": 411,
	"./lb": 412,
	"./lb.js": 412,
	"./lo": 413,
	"./lo.js": 413,
	"./lt": 414,
	"./lt.js": 414,
	"./lv": 415,
	"./lv.js": 415,
	"./me": 416,
	"./me.js": 416,
	"./mi": 417,
	"./mi.js": 417,
	"./mk": 418,
	"./mk.js": 418,
	"./ml": 419,
	"./ml.js": 419,
	"./mn": 420,
	"./mn.js": 420,
	"./mr": 421,
	"./mr.js": 421,
	"./ms": 422,
	"./ms-my": 423,
	"./ms-my.js": 423,
	"./ms.js": 422,
	"./mt": 424,
	"./mt.js": 424,
	"./my": 425,
	"./my.js": 425,
	"./nb": 426,
	"./nb.js": 426,
	"./ne": 427,
	"./ne.js": 427,
	"./nl": 428,
	"./nl-be": 429,
	"./nl-be.js": 429,
	"./nl.js": 428,
	"./nn": 430,
	"./nn.js": 430,
	"./pa-in": 431,
	"./pa-in.js": 431,
	"./pl": 432,
	"./pl.js": 432,
	"./pt": 433,
	"./pt-br": 434,
	"./pt-br.js": 434,
	"./pt.js": 433,
	"./ro": 435,
	"./ro.js": 435,
	"./ru": 436,
	"./ru.js": 436,
	"./sd": 437,
	"./sd.js": 437,
	"./se": 438,
	"./se.js": 438,
	"./si": 439,
	"./si.js": 439,
	"./sk": 440,
	"./sk.js": 440,
	"./sl": 441,
	"./sl.js": 441,
	"./sq": 442,
	"./sq.js": 442,
	"./sr": 443,
	"./sr-cyrl": 444,
	"./sr-cyrl.js": 444,
	"./sr.js": 443,
	"./ss": 445,
	"./ss.js": 445,
	"./sv": 446,
	"./sv.js": 446,
	"./sw": 447,
	"./sw.js": 447,
	"./ta": 448,
	"./ta.js": 448,
	"./te": 449,
	"./te.js": 449,
	"./tet": 450,
	"./tet.js": 450,
	"./tg": 451,
	"./tg.js": 451,
	"./th": 452,
	"./th.js": 452,
	"./tl-ph": 453,
	"./tl-ph.js": 453,
	"./tlh": 454,
	"./tlh.js": 454,
	"./tr": 455,
	"./tr.js": 455,
	"./tzl": 456,
	"./tzl.js": 456,
	"./tzm": 457,
	"./tzm-latn": 458,
	"./tzm-latn.js": 458,
	"./tzm.js": 457,
	"./ug-cn": 459,
	"./ug-cn.js": 459,
	"./uk": 460,
	"./uk.js": 460,
	"./ur": 461,
	"./ur.js": 461,
	"./uz": 462,
	"./uz-latn": 463,
	"./uz-latn.js": 463,
	"./uz.js": 462,
	"./vi": 464,
	"./vi.js": 464,
	"./x-pseudo": 465,
	"./x-pseudo.js": 465,
	"./yo": 466,
	"./yo.js": 466,
	"./zh-cn": 467,
	"./zh-cn.js": 467,
	"./zh-hk": 468,
	"./zh-hk.js": 468,
	"./zh-tw": 469,
	"./zh-tw.js": 469
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 837;

/***/ }),

/***/ 855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_http_loader__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_truncate_pipe__ = __webpack_require__(856);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_trim_html_pipe__ = __webpack_require__(857);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_config__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














function createTranslateLoader(httpClient) {
    return new __WEBPACK_IMPORTED_MODULE_10__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](httpClient, './assets/translations/', '.json');
}
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__pipes_truncate_pipe__["a" /* TruncatePipe */],
                __WEBPACK_IMPORTED_MODULE_12__pipes_trim_html_pipe__["a" /* TrimHtmlPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_11__pipes_truncate_pipe__["a" /* TruncatePipe */],
                __WEBPACK_IMPORTED_MODULE_12__pipes_trim_html_pipe__["a" /* TrimHtmlPipe */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__app_config__["a" /* Config */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 856:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TruncatePipe = /** @class */ (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, args) {
        var limit = args > 0 ? args : 100;
        var trail = '...';
        return value.length > limit ? value.substring(0, limit) + trail : value;
    };
    TruncatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'truncate'
        })
    ], TruncatePipe);
    return TruncatePipe;
}());

//# sourceMappingURL=truncate.pipe.js.map

/***/ }),

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrimHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TrimHtmlPipe = /** @class */ (function () {
    function TrimHtmlPipe() {
    }
    TrimHtmlPipe.prototype.transform = function (value) {
        return this.htmlToPlainText(value);
    };
    TrimHtmlPipe.prototype.htmlToPlainText = function (html) {
        return String(html).replace(/<[^>]+>/gm, '');
    };
    TrimHtmlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'trimHTML'
        })
    ], TrimHtmlPipe);
    return TrimHtmlPipe;
}());

//# sourceMappingURL=trim-html.pipe.js.map

/***/ }),

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordpressService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__(93);
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




var WordpressService = /** @class */ (function () {
    function WordpressService(http, config) {
        this.http = http;
        this.config = config;
    }
    WordpressService.prototype.login = function (data) {
        var url = this.config.wordpressApiUrl + '/jwt-auth/v1/token';
        return this.http.post(url, data)
            .map(function (result) {
            return result.json();
        });
    };
    WordpressService.prototype.getPosts = function (query) {
        query = this.transformRequest(query);
        var url = this.config.wordpressApiUrl + ("/wp/v2/posts?" + query + "&_embed");
        return this.http.get(url)
            .map(function (result) {
            return result.json();
        });
    };
    WordpressService.prototype.getPost = function (id) {
        return this.http.get(this.config.wordpressApiUrl + ("/wp/v2/posts/" + id + "?_embed"))
            .map(function (result) {
            return result.json();
        });
    };
    WordpressService.prototype.getPostGallery = function (id) {
        return this.http.get(this.config.wordpressApiUrl + ("/wp/v2/comments?post=" + id))
            .map(function (result) {
            return result.json();
        });
    };
    WordpressService.prototype.getMedia = function (id) {
        return this.http.get(this.config.wordpressApiUrl + ("/wp/v2/media/" + id))
            .map(function (result) {
            return result.json();
        });
    };
    WordpressService.prototype.getCategories = function () {
        return this.http.get(this.config.wordpressApiUrl + '/wp/v2/categories?per_page=100')
            .map(function (result) {
            return result.json();
        });
    };
    WordpressService.prototype.getTags = function () {
        return this.http.get(this.config.wordpressApiUrl + '/wp/v2/tags?per_page=100')
            .map(function (result) {
            return result.json();
        });
    };
    WordpressService.prototype.getPages = function () {
        return this.http.get(this.config.wordpressApiUrl + '/wp/v2/pages?per_page=100')
            .map(function (result) {
            return result.json();
        });
    };
    WordpressService.prototype.getPage = function (id) {
        return this.http.get(this.config.wordpressApiUrl + ("/wp/v2/pages/" + id))
            .map(function (result) {
            return result.json();
        });
    };
    WordpressService.prototype.getMenus = function () {
        return this.http.get(this.config.wordpressApiUrl + '/wp-api-menus/v2/menus')
            .map(function (result) {
            return result.json();
        });
    };
    WordpressService.prototype.getMenu = function (id) {
        return this.http.get(this.config.wordpressApiUrl + ("/wp-api-menus/v2/menus/" + id))
            .map(function (result) {
            return result.json();
        });
    };
    WordpressService.prototype.transformRequest = function (obj) {
        var p, str;
        str = [];
        for (p in obj) {
            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
        }
        return str.join('&');
    };
    WordpressService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* Config */]])
    ], WordpressService);
    return WordpressService;
}());

//# sourceMappingURL=wordpress.service.js.map

/***/ }),

/***/ 859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_is_cordova_available__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_config__ = __webpack_require__(93);
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
    function MyApp(translate, platform, config, statusBar, events, oneSignal, toastController, cdRef) {
        // {
        //   title: 'Di Jaan Jaya Wahi',
        //   icon: 'fa-fal-dijaan',
        //   component: 'ArticlePage',
        //   params: {
        //     articleId: '1538910075447'
        //   }
        // },
        var _this = this;
        this.translate = translate;
        this.platform = platform;
        this.config = config;
        this.statusBar = statusBar;
        this.events = events;
        this.oneSignal = oneSignal;
        this.toastController = toastController;
        this.cdRef = cdRef;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages__["a" /* MainPage */];
        this.pages = [
            {
                title: 'Di Jaan - Videos',
                icon: 'fa-fal-video',
                component: 'YoutubePage',
                params: {
                    playlistId: 'PLPzS0mASgDd42z1HM_HKXkSvKZT7L5SDH',
                    title: 'Di Jaan Videos'
                }
            },
            {
                title: 'Live Darshan',
                icon: 'fa-fal-video',
                component: 'YoutubeVideoPage',
                params: {
                    video: {
                        snippet: {
                            title: 'Live Darshan',
                            description: 'Live Darshan...',
                            resourceId: {
                                videoId: '123'
                            }
                        }
                    },
                    liveurl: 'https://www.sai.org.in/en/sai-video-popup',
                    title: 'Live Darshan'
                }
            },
            {
                title: 'Di Jaan - Books',
                icon: 'fa-fal-books',
                component: 'ArticlePage',
                params: {
                    articleId: '1538935188821'
                }
            },
            {
                title: 'Sri Sai Satcharitra',
                icon: 'fa-fal-books',
                component: 'BookPage',
                params: {
                    bookId: '1538935188821'
                }
            },
            {
                title: 'Events',
                icon: 'fa-fal-events',
                component: 'ArticlePage',
                params: {
                    articleId: '1538935661036'
                }
            },
            {
                title: 'Donate',
                icon: 'fa-fal-donate',
                component: 'DonatePage'
            },
            {
                title: 'Contact Us',
                icon: 'fa-fal-contact',
                component: 'ContactPage'
            },
        ];
        platform.ready().then(function () {
            _this.initializeApp();
        });
        this.initTranslate();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        if (Object(__WEBPACK_IMPORTED_MODULE_5__common_is_cordova_available__["a" /* isCordovaAvailable */])()) {
            this.statusBar.styleDefault();
            // this.splashScreen.hide();
            //Handle Push Notification
            this.oneSignal.startInit(__WEBPACK_IMPORTED_MODULE_7__app_config__["b" /* oneSignalAppId */], __WEBPACK_IMPORTED_MODULE_7__app_config__["c" /* sender_id */]);
            this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
            this.oneSignal.handleNotificationReceived().subscribe(function (data) { return _this.onPushReceived(data.payload); });
            this.oneSignal.handleNotificationOpened().subscribe(function (data) { return _this.onPushOpened(data.notification.payload); });
            this.oneSignal.endInit();
        }
    };
    MyApp.prototype.onPushReceived = function (payload) {
        this.showToastMessage(payload);
        this.handlePushNotification(payload);
    };
    MyApp.prototype.onPushOpened = function (payload) {
        this.handlePushNotification(payload);
    };
    MyApp.prototype.showToastMessage = function (payload) {
        var toast = this.toastController.create({
            message: payload.title + " : " + payload.body,
            duration: 6000,
            position: 'top',
            showCloseButton: true
        });
        toast.present();
    };
    MyApp.prototype.handlePushNotification = function (payload) {
        this.cdRef.detectChanges();
    };
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('en');
        this.translate.get(['BACK_BUTTON_TEXT']).subscribe(function (values) {
            _this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.events.publish('navigationEvent', page);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "<ion-split-pane>\n    <ion-menu [content]=\"content\">\n      <ion-header>\n        <ion-toolbar>\n          <ion-title>Pages</ion-title>\n        </ion-toolbar>\n      </ion-header>\n\n      <ion-content>\n        <ion-list>\n          <button menuClose ion-item *ngFor=\"let p of pages\" (tap)=\"openPage(p)\">\n            <ion-icon name=\"{{p.icon}}\"></ion-icon>\n            {{p.title}}\n          </button>\n        </ion-list>\n      </ion-content>\n\n    </ion-menu>\n    <ion-nav main #content [root]=\"rootPage\" swipeBackEnabled=\"false\"></ion-nav>\n    </ion-split-pane>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* Config */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyC5R57c9Umd3xmqiGeW5OkGr4Um9XMuNeI",
    authDomain: "saibisa-3f765.firebaseapp.com",
    databaseURL: "https://saibisa-3f765.firebaseio.com",
    projectId: "saibisa-3f765",
    storageBucket: "saibisa-3f765.appspot.com",
    messagingSenderId: "889072797417"
};
//# sourceMappingURL=app.firebase.config.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return sender_id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return oneSignalAppId; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Config = /** @class */ (function () {
    function Config() {
        //public wordpressApiUrl = 'http://mobile-apps.today/products/ionic/woocommerce-api/wp-json';
        this.versionCheckUrl = 'https://us-central1-saibisa-3f765.cloudfunctions.net/versionCheck';
        this.wordpressApiUrl = 'https://dijaanjayawahi.com/wp-json';
        this.wordpressMenusNavigation = false;
        this.feedsUrl = './assets/data/feeds.json';
        this.feedsCategoryUrl = './assets/data/feeds-category.json';
        this.youtubeKey = 'AIzaSyClMa-MaKro_m95tb--4LaAorl-NmGPJxc';
        this.youtubeApiUrl = 'https://www.googleapis.com/youtube/v3/';
        this.youtubeUrl = 'https://www.youtube.com/';
        this.youtubeUsername = 'ColdplayVEVO';
        this.youtubeChannelId = 'UCnb6PA08HFf9hRpfPlZgy0A';
        this.youtubeResults = 50;
        this.emailTo = 'saibisafamily@gmail.com';
    }
    Config = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], Config);
    return Config;
}());

var sender_id = '889072797417';
var oneSignalAppId = '47f03f56-e532-4c48-b5fc-7f9e391430bc';
//# sourceMappingURL=app.config.js.map

/***/ })

},[521]);
//# sourceMappingURL=main.js.map