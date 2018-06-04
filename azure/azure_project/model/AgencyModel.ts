import Mongoose = require('mongoose');
import {DataAccess} from './../DataAccess';
import { IAgencyModel } from '../interfaces/IAgencyModel';

const mongooseConnection = DataAccess.mongooseConnection;
const mongooseObj = DataAccess.mongooseInstance;

class AgencyModel {
    public schema: any;
    public model: any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
        {
            name: String,
            number: Number,
            website: String,
            address: String,
            agencyId: String,
            hikes:  [Number]
        },
        {
            collection: 'agency'
        }
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IAgencyModel>('Agency', this.schema);
    }

    public retrieveAgencyData(response: any, filter: Object): any {
        const query: any = this.model.findOne(filter); // todo
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }

    public retrieveAllAgencies(response: any, filter: Object): any {
        const query: any = this.model.find(filter);
        query.exec( (err, itemArray) => {
            console.log("BD answer: "+itemArray);
            response.json(itemArray);
        });
    }
    
     // returning the agencies that contain this hike id
    public retrieveAllAgenciesId(response: any, filter: Object): any {
        const query: any = this.model.find(filter );
        query.exec( (err, itemArray) => {
            console.log("BD answer: "+itemArray);
            response.json(itemArray);
        });
    }
}
export{AgencyModel};
