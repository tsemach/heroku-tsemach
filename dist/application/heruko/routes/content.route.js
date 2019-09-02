"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logging_1 = require("logging");
const logger = logging_1.default('ContentRoute');
const express = require("express");
const server_1 = require("../../../express/server");
class ContentRoute {
    constructor() {
        server_1.default.instance.route('/admin/content', this);
    }
    add() {
        let router = express.Router();
        // // --------------------------------------------------------------------------
        // router.get('/', async (req: express.Request, res: express.Response) => {
        //   const { name, project, branch = 'master' } = req.query;
        //   logger.info("GET:/admin/content - get readme file from github:", project);
        //   try {
        //     const reply = await Application.heruko.setContent(name, project, branch);
        //     logger.info("GET:/admin/content reply = ", JSON.stringify(reply, undefined, 2));
        //     res.json({success: true, data: reply});
        //   }
        //   catch (e) {
        //     logger.error("GET:/admin/content - ERROR:", e, "\n", e.stack);
        //     res.json({success: false, data: {error: e}});
        //   }
        // });
        // // --------------------------------------------------------------------------
        return router;
    }
}
exports.default = new ContentRoute();
//# sourceMappingURL=content.route.js.map