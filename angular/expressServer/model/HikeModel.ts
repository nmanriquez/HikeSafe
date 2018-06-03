import Mongoose = require('mongoose');
import {DataAccess} from './../DataAccess';
import {IHikeModel} from '../interfaces/IHikeModel';

const mongooseConnection = DataAccess.mongooseConnection;
const mongooseObj = DataAccess.mongooseInstance;

class HikeModel {
    public schema: any;
    public model: any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
        {
            hikeId: Number,
            name: String,
            description: String,
            location: String,
            difficulty: String,
            agencies: [Number]
        },
        {
            collection: 'hike'
        }
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IHikeModel>('Hike', this.schema);
    }

    public retrieveHikeData(response: any, filter: Object): any {
        const query: any = this.model.findOne(filter); // todo
        query.exec( (err, itemArray) => {
            console.log("DB response: "+itemArray);
            response.json(itemArray);
        });
    }

    public retrieveAllHikes(response: any): any {
        const query: any = this.model.find();
        query.exec( (err, itemArray) => {
            console.log("DB response: "+itemArray);
            response.json(itemArray);
        });
    }
}
export{HikeModel};
