"use strict";
exports.__esModule = true;
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var HikeModel_1 = require("./model/HikeModel");
// ExpressJS web server.
var App = /** @class */ (function () {
    //for express instance.
    function App() {
        this.express = express();
        this.middleware();
        this.routes();
        this.Hike = new HikeModel_1.HikeModel();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    };
    // Configure API endpoints.
    App.prototype.routes = function () {
        var _this = this;
        var router = express.Router();
        router.get('/app/info/hike/:hname', function (req, res) {
            var hname = req.params.hname;
            _this.Hike.retrieveHikeData(res, { name: hname });
        });
        this.express.use('/', router);
        this.express.use('/app/json/', express.static(__dirname + '/app/json'));
        this.express.use('/images', express.static(__dirname + '/img'));
        this.express.use('/', express.static(__dirname + '/pages'));
    };
    return App;
}());
exports.App = App;
