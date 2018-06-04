import Mongoose = require('mongoose');

interface IAgencyModel extends Mongoose.Document {
    name: String;
    number: Number;
    website: String;
    address: String;
    agencyId: String;
    hikes: [Number];
}
export {IAgencyModel};
