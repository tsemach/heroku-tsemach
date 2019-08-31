import createLogger from 'logging'; 
const logger = createLogger('AdminRoute');

import * as logger from 'logging';
import * as express from 'express';

import * as utils from '../../utils/utils';
import Server from '../../express/server';
import Service from '../../express/service.type';

import Application from '../application';

class ContentRoute implements Service {

  constructor() {
    Server.instance.route('/admin/content', this);
  }

  public add(): express.Router {    
    let router = express.Router();

    // --------------------------------------------------------------------------
    router.get('/', async (req: express.Request, res: express.Response) => {
      const { name, project, branch = 'master' } = req.query;
      logger.info("GET:/admin/content - get readme file from github:", project);
      try {
        const reply = await Application.admin.setContent(name, project, branch);

        logger.info("GET:/admin/content reply = ", JSON.stringify(reply, undefined, 2));
        res.json({success: true, data: reply});
      }
      catch (e) {
        logger.error("GET:/admin/content - ERROR:", e, "\n", e.stack);
        res.json({success: false, data: {error: e}});
      }
    });
    // --------------------------------------------------------------------------
    
    return router;
  }
}

export default new ContentRoute();