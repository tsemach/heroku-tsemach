import createLogger from 'logging'; 
const logger = createLogger('DescriptionRoute');

import * as logger from 'logging';
import * as express from 'express';

import Server from '../../../express/server';
import Service from '../../../express/service.type';

import Application from '../../application';
import HerukoApplicationType from '../common/heruko-application.type';

class AdminRoute implements Service {

  constructor() {
    Server.instance.route('/heruko', this);
  }

  public add(): express.Router {    
    let router = express.Router();

    // --------------------------------------------------------------------------
    router.get('/descriptions', async (req: express.Request, res: express.Response) => {
      logger.info("GET:/admin/descriptions - get all applicationa:");
      try {
        const reply = await Application.heruko.getDescripions();

        logger.info("GET:/admin/descriptions reply = ", JSON.stringify(reply, undefined, 2));
        res.json({success: reply.ok === 1, data: reply});
      }
      catch (e) {
        logger.error("GET:/admin/descriptions - ERROR:", e, "\n", e.stack);
        res.json({success: false, data: {error: e}});
      }
    });
    // --------------------------------------------------------------------------  

    // --------------------------------------------------------------------------
    router.get('/description', async (req: express.Request, res: express.Response) => {
      const { name } = req.query;
      logger.info("GET:/heruko/description - get heruko app");
      try {
        if ( ! name ) {
          logger.error("GET:/heruko/description - ERROR: name is undefined");

          return res.json({success: false, data: {}});
        }
 
        const descriptions = await Application.heruko.getDescripion(name);
        if (descriptions.length > 0) {
          logger.info("GET:/heruko/description reply = ", JSON.stringify(descriptions[0], undefined, 2));
          res.json({success: true, data: descriptions[0]});

          return;
        }
        logger.info("GET:/heruko/description get empty array from database for name", name);
        res.json({success: false, data: []});
      }
      catch (e) {
        logger.error("GET:/heruko/description - ERROR:", e, "\n", e.stack);
        res.json({success: false, data: {error: e}});
      }
    });
    // --------------------------------------------------------------------------    

    return router;
  }
}

export default new AdminRoute();