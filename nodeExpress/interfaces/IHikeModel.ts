import Mongoose = require("mongoose");

interface IHikeModel extends Mongoose.Document{
    hikeId: number;
    name: String;
    description: String;
    location: String;
    difficulty: String;
}
export {IHikeModel};