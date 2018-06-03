"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var HikeModel = /** @class */ (function () {
    function HikeModel() {
        this.createSchema();
        this.createModel();
    }
    HikeModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            hikeId: Number,
            name: String,
            description: String,
            location: String,
            difficulty: String
        }, {
            collection: 'hike'
        });
    };
    HikeModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Hike", this.schema);
    };
    HikeModel.prototype.retrieveHikeData = function (response, filter) {
        var query = this.model.findOne(filter); //todo
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return HikeModel;
}());
exports.HikeModel = HikeModel;
