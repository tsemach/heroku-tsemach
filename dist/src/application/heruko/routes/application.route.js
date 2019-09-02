"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const logging_1 = require("logging");
const logger = logging_1.default('ApplicationRoute');
const express = require("express");
const server_1 = require("../../../express/server");
const application_1 = require("../../application");
class AdminRoute {
    constructor() {
        server_1.default.instance.route('/heruko', this);
    }
    add() {
        let router = express.Router();
        // --------------------------------------------------------------------------
        router.get('/applications', (req, res) => __awaiter(this, void 0, void 0, function* () {
            logger.info("GET:/heruko/applications - get all applicationa:");
            try {
                const reply = yield application_1.default.heruko.getApplications();
                logger.info("GET:/heruko/applications reply = ", JSON.stringify(reply, undefined, 2));
                res.json({ success: reply.ok === 1, data: reply });
            }
            catch (e) {
                logger.error("GET:/heruko/applications - ERROR:", e, "\n", e.stack);
                res.json({ success: false, data: { error: e } });
            }
        }));
        // --------------------------------------------------------------------------  
        // --------------------------------------------------------------------------
        router.post('/application', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const application = req.body;
            logger.info("POST:/heruko/application - add application:", application);
            try {
                const reply = yield application_1.default.heruko.addApplication(application);
                logger.info("PORT:/heruko/application reply = ", JSON.stringify(reply, undefined, 2));
                res.json({ success: reply.ok === 1, data: reply });
            }
            catch (e) {
                logger.error("POST:/heruko/application - ERROR:", e, "\n", e.stack);
                res.json({ success: false, data: { error: e } });
            }
        }));
        // --------------------------------------------------------------------------  
        return router;
    }
}
exports.default = new AdminRoute();
//# sourceMappingURL=application.route.js.map