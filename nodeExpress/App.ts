import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as mongodb from 'mongodb';
import * as url from 'url';
import * as bodyParser from 'body-parser';

import {HikeModel} from './model/HikeModel';
import {DataAccess} from './DataAccess';
// ExpressJS web server.
class App {

  public express: express.Application;
  public Hike: HikeModel;

  //for express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.Hike = new HikeModel();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }
  
  // Configure API endpoints.
  private routes(): void {
    let router = express.Router();

    router.get('/app/info/hike/:hname', (req, res) => {
        let hname:string = req.params.hname;
        this.Hike.retrieveHikeData(res, {name: hname});
    })

    this.express.use('/', router);

    this.express.use('/app/json/', express.static(__dirname+'/app/json'));
    this.express.use('/images', express.static(__dirname+'/img'));
    this.express.use('/', express.static(__dirname+'/pages'));
  }

}

export {App};