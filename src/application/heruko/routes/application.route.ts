import createLogger from 'logging'; 
const logger = createLogger('ApplicationRoute');

import * as logger from 'logging';
import * as express from 'express';

import * as utils from '../../../utils/utils';
import Server from '../../../express/server';
import Service from '../../../express/service.type';

import Application from '../../application';
import AdminApplicationType from '../common/heruko-application.type';

class AdminRoute implements Service {

  constructor() {
    Server.instance.route('/heruko', this);
  }

  public add(): express.Router {    
    let router = express.Router();

    // --------------------------------------------------------------------------
    router.get('/applications', async (req: express.Request, res: express.Response) => {
      logger.info("GET:/heruko/applications - get all applicationa:");
      try {
        const reply = await Application.heruko.getApplications();

        logger.info("GET:/heruko/applications reply = ", JSON.stringify(reply, undefined, 2));
        res.json({success: reply.ok === 1, data: reply});
      }
      catch (e) {
        logger.error("GET:/heruko/applications - ERROR:", e, "\n", e.stack);
        res.json({success: false, data: {error: e}});
      }
    });
    // --------------------------------------------------------------------------  

    // --------------------------------------------------------------------------
    router.post('/application', async (req: express.Request, res: express.Response) => {
      const application: AdminApplicationType = req.body;      
      logger.info("POST:/heruko/application - add application:", application);
      try {
        const reply = await Application.heruko.addApplication(application);

        logger.info("PORT:/heruko/application reply = ", JSON.stringify(reply, undefined, 2));
        res.json({success: reply.ok === 1, data: reply});
      }
      catch (e) {
        logger.error("POST:/heruko/application - ERROR:", e, "\n", e.stack);
        res.json({success: false, data: {error: e}});
      }
    });
    // --------------------------------------------------------------------------  

    return router;
  }
}

export default new AdminRoute();