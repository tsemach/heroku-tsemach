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
const logger = logging_1.default('ItemRoute');
const express = require("express");
const server_1 = require("../../express/server");
const application_1 = require("../application");
class ItemRoute {
    constructor() {
        server_1.default.instance.route('/v1/todos/item', this);
    }
    add() {
        let router = express.Router();
        // --------------------------------------------------------------------------
        router.post('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            logger.info("POST:/v1/todos/item - get todo\n" + JSON.stringify(body, undefined, 2));
            try {
                const reply = yield application_1.default.todos.addToDoItem(body);
                logger.info("POST:/v1/todos/item reply = ", JSON.stringify(reply, undefined, 2));
                res.json({ success: true, data: [reply] });
            }
            catch (e) {
                logger.error("POST:/v1/todos/item/add - ERROR:", e, "\n", e.stack);
                res.json({ success: false, data: { error: e } });
            }
        }));
        // --------------------------------------------------------------------------
        // --------------------------------------------------------------------------
        router.put('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            logger.info("PUT:/v1/todos/item - get todo\n" + JSON.stringify(body, undefined, 2));
            try {
                const reply = yield application_1.default.todos.editToDoItem(body);
                logger.info("PUT:/v1/todos/item reply = ", JSON.stringify(reply, undefined, 2));
                res.json({ success: reply.ok === 1, data: reply });
            }
            catch (e) {
                logger.error("POST:/v1/todos/item/add - ERROR:", e, "\n", e.stack);
                res.json({ success: false, data: { error: e } });
            }
        }));
        // --------------------------------------------------------------------------
        // --------------------------------------------------------------------------
        router.delete('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = {
                _id: req.query['_id'],
                _object_id: req.query['_object_id'],
                _item_id: req.query['_item_id'],
                index: req.query['index']
            };
            logger.info("DELETE:/v1/todos/item - get todo\n" + JSON.stringify(data, undefined, 2));
            try {
                const reply = yield application_1.default.todos.deleteToDoItem(data);
                console.log("DELETE:/v1/todos/item reply = ", JSON.stringify(reply, undefined, 2));
                res.json({ success: true, data: { ok: 1 } });
            }
            catch (e) {
                console.log("POST:/v1/todos/item/add - ERROR:", e, "\n", e.stack);
                res.json({ success: false, data: { error: e } });
            }
        }));
        // --------------------------------------------------------------------------    
        return router;
    }
}
exports.default = new ItemRoute();
//# sourceMappingURL=item.route.js.map