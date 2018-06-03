import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {IHikeModel} from '../interfaces/IHikeModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class HikeModel{
    public schema:any;
    public model:any;

    public constructor(){
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void{
        this.schema = new Mongoose.Schema(
        {
            hikeId: Number,
            name: String,
            description: String,
            location: String,
            difficulty: String
        },
        {
            collection: 'hike'
        }
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IHikeModel>("Hike",this.schema);
    }

    public retrieveHikeData(response:any, filter:Object):any {
        let query: any = this.model.findOne(filter); //todo
        query.exec( (err, itemArray) =>{
            response.json(itemArray);
        });

    }
}
export{HikeModel};