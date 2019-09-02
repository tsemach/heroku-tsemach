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
const logger = logging_1.default('DescriptionRoute');
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
        router.get('/descriptions', (req, res) => __awaiter(this, void 0, void 0, function* () {
            logger.info("GET:/admin/descriptions - get all applicationa:");
            try {
                const reply = yield application_1.default.heruko.getDescripions();
                logger.info("GET:/admin/descriptions reply = ", JSON.stringify(reply, undefined, 2));
                res.json({ success: reply.ok === 1, data: reply });
            }
            catch (e) {
                logger.error("GET:/admin/descriptions - ERROR:", e, "\n", e.stack);
                res.json({ success: false, data: { error: e } });
            }
        }));
        // --------------------------------------------------------------------------  
        // --------------------------------------------------------------------------
        router.get('/description', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { name } = req.query;
            logger.info("GET:/heruko/description - get heruko app");
            try {
                if (!name) {
                    logger.error("GET:/heruko/description - ERROR: name is undefined");
                    return res.json({ success: false, data: {} });
                }
                const descriptions = yield application_1.default.heruko.getDescripion(name);
                if (descriptions.length > 0) {
                    logger.info("GET:/heruko/description reply = ", JSON.stringify(descriptions[0], undefined, 2));
                    res.json({ success: true, data: descriptions[0] });
                    return;
                }
                logger.info("GET:/heruko/description get empty array from database for name", name);
                res.json({ success: false, data: [] });
            }
            catch (e) {
                logger.error("GET:/heruko/description - ERROR:", e, "\n", e.stack);
                res.json({ success: false, data: { error: e } });
            }
        }));
        // --------------------------------------------------------------------------    
        return router;
    }
}
exports.default = new AdminRoute();
//# sourceMappingURL=description.route.js.map