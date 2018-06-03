"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess = /** @class */ (function () {
    function DataAccess() {
        DataAccess.connect();
    }
    DataAccess.connect = function () {
        if (this.mongooseInstance)
            return this.mongooseInstance;
        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.on("open", function () {
            console.log("Connected to mongodb.");
        });
        this.mongooseInstance = Mongoose.connect(this.DB_CONNECTION_STRING);
        return this.mongooseInstance;
    };
    //static DB_CONNECTION_STRING:string = 'mongodb://dbAdmin:test@localhost:3000/hikeSafeTest?authSource=admin';
    DataAccess.DB_CONNECTION_STRING = 'mongodb://dbAdmin:TestAccount@ds016298.mlab.com:16298/testtwo?authSource=admin';
    return DataAccess;
}());
exports.DataAccess = DataAccess;
DataAccess.connect();
