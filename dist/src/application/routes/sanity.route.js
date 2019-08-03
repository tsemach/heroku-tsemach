"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logging_1 = require("logging");
const logger = logging_1.default('SanityRoute');
const express = require("express");
const server_1 = require("../../express/server");
class SanityRoute {
    constructor() {
        server_1.default.instance.route('/sanity', this);
    }
    add() {
        // route: sanity ------------------------------------------------------------
        let router = express.Router();
        router.get('/', (_, res, __) => {
            res.json({ success: true, data: { message: 'sanity-route: todo is up' } });
        });
        router.get('/todo', (req, res) => {
            res.json({ success: true, data: { message: 'sanity-route: todo is up' } });
        });
        return router;
        // --------------------------------------------------------------------------
    }
}
exports.default = new SanityRoute();
//# sourceMappingURL=sanity.route.js.map