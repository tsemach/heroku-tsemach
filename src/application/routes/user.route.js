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
const logger = logging_1.default('UserRoute');
const express = require("express");
const server_1 = require("../../express/server");
const application_1 = require("../application");
/**
 * API:
 *  GET - /user: return list of users
 *  GET - /user?username="tsemach@intel.com": return list of users
 */
class UserRoute {
    constructor() {
        server_1.default.instance.route('/v1/user', this);
    }
    add() {
        let router = express.Router();
        // --------------------------------------------------------------------------
        router.get('/', (req, res) => {
            if (req.query['username']) {
                logger.info('GET:/v1/user - got username = ', req.query['username']);
                res.json({ success: true, data: { message: `user-route: got name - ${req.query['username']}` } });
                return;
            }
            res.json({ success: true, data: { message: 'user-route: no username found' } });
        });
        router.get('/todo', (req, res) => {
            res.json({ success: true, data: { message: 'sanity-route: todo is up' } });
        });
        // --------------------------------------------------------------------------
        // --------------------------------------------------------------------------
        router.post('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { userName, displayName } = req.body;
            if (userName) {
                logger.info('POST:/v1/user - got username = ', userName);
                try {
                    const reply = yield application_1.default.todos.createNewUser(userName, displayName);
                    logger.info('POST:/v1/user - add user, reply:', JSON.stringify(reply, undefined, 2));
                    res.json({ success: true, data: [reply] });
                }
                catch (e) {
                    logger.error("POST:/v1/user - ERROR:", e, "\n", e.stack);
                    res.json({ success: false, data: { error: e } });
                }
                return;
            }
            res.json({ success: false, data: { message: 'anable to user userName field' } });
        }));
        router.get('/todo', (req, res) => {
            res.json({ success: true, data: { message: 'sanity-route: todo is up' } });
        });
        // --------------------------------------------------------------------------
        return router;
    }
}
exports.default = new UserRoute();
//# sourceMappingURL=user.route.js.map