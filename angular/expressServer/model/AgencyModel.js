"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var AgencyModel = /** @class */ (function () {
    function AgencyModel() {
        this.createSchema();
        this.createModel();
    }
    AgencyModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            name: String,
            number: Number,
            website: String,
            address: String,
            agencyId: String,
            hikes: [Number]
        }, {
            collection: 'agency'
        });
    };
    AgencyModel.prototype.createModel = function () {
        this.model = mongooseConnection.model('Agency', this.schema);
    };
    AgencyModel.prototype.retrieveAgencyData = function (response, filter) {
        var query = this.model.findOne(filter); // todo
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    AgencyModel.prototype.retrieveAllAgencies = function (response, filter) {
        var query = this.model.find(filter);
        query.exec(function (err, itemArray) {
            console.log("BD answer: " + itemArray);
            response.json(itemArray);
        });
    };
    // returning the agencies that contain this hike id
    AgencyModel.prototype.retrieveAllAgenciesId = function (response, filter) {
        var query = this.model.find(filter);
        query.exec(function (err, itemArray) {
            console.log("BD answer: " + itemArray);
            response.json(itemArray);
        });
    };
    return AgencyModel;
}());
exports.AgencyModel = AgencyModel;
