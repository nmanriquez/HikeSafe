"use strict";
exports.__esModule = true;
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var HikeModel_1 = require("./model/HikeModel");
var AgencyModel_1 = require("./model/AgencyModel");
// ExpressJS web server.
var App = /** @class */ (function () {
    // for express instance.
    function App() {
        this.express = express();
        this.middleware();
        this.routes();
        this.Hike = new HikeModel_1.HikeModel();
        this.Agency = new AgencyModel_1.AgencyModel();
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
        router.use(function (req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            next();
        });
        router.get('/app/info/hike/:hname', function (req, res) {
            var hname = req.params.hname;
            console.log('App express param:' + hname);
            _this.Hike.retrieveHikeData(res, { name: hname });
        });
        router.get('/app/info/agency/:aname', function (req, res) {
            var aname = req.params.aname;
            console.log('App express param:' + aname);
            _this.Agency.retrieveAgencyData(res, { name: aname });
        });
        router.get('/app/info/hike', function (req, res) {
            _this.Hike.retrieveAllHikes(res);
        });
        // returning the agencies that contains this hike id
        router.get('/app/info/hike/:id/agency', function (req, res) {
            var hikeid = req.params.id;
            _this.Agency.retrieveAllAgenciesId(res, { hikes: hikeid });
        });
        this.express.use('/', router);
        this.express.use('/json', express.static(__dirname + '/json'));
    };
    return App;
}());
exports.App = App;
