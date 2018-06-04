import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as mongodb from 'mongodb';
import * as url from 'url';
import * as bodyParser from 'body-parser';

import {HikeModel} from './model/HikeModel';
import {DataAccess} from './DataAccess';
import { AgencyModel } from './model/AgencyModel';

// ExpressJS web server.
class App {

  public express: express.Application;
  public Hike: HikeModel;
  public Agency: AgencyModel;

  // for express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.Hike = new HikeModel();
    this.Agency = new AgencyModel();

  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }
  // Configure API endpoints.
  private routes(): void {
    const router = express.Router();

    router.use( (req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      next();
     });

     router.get('/app/info/hike/:hname', (req, res) => {
      const hname: string = req.params.hname;
      console.log('App express param:' + hname);
      this.Hike.retrieveHikeData(res, {name: hname});
    });

    router.get('/app/info/agency/:aname', (req, res) => {
      const aname: string = req.params.aname;
      console.log('App express param:' + aname);
      this.Agency.retrieveAgencyData(res, {name: aname});
    });

    router.get('/app/info/hike', (req, res) => {
      this.Hike.retrieveAllHikes(res);
    });

    // returning the agencies that contains this hike id
    router.get('/app/info/hike/:id/agency', (req, res) => {
      const hikeid: string = req.params.id;
      this.Agency.retrieveAllAgenciesId(res, {hikes: hikeid});
    });

    this.express.use('/', router);
    this.express.use('/json', express.static(__dirname + '/json'));
	  this.express.use('/', express.static(__dirname + '/dist'));
  }

}

export {App};
