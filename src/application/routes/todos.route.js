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
const logger = logging_1.default('TodosRoute');
const express = require("express");
const server_1 = require("../../express/server");
const application_1 = require("../application");
class TodosRoute {
    constructor() {
        server_1.default.instance.route('/v1/todos', this);
    }
    add() {
        let router = express.Router();
        // --------------------------------------------------------------------------
        router.get('/', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const username = req.query['username'];
            if (username) {
                logger.info('GET:/v1/todos - got username = ', username);
                const reply = yield application_1.default.todos.getToDos(username);
                logger.info("GET:/v1/todos  - ToDos: ", JSON.stringify(reply, undefined, 2));
                res.json({ success: true, data: reply });
                return;
            }
            res.json({ success: false, data: { message: 'user-route: no username found' } });
        }));
        // --------------------------------------------------------------------------
        // --------------------------------------------------------------------------
        router.post('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            logger.info("POST:/v1/todos - get todo\n" + JSON.stringify(body, undefined, 2));
            try {
                const reply = yield application_1.default.todos.addToDo(body);
                logger.info("[POST:/v1/todos] reply = ", JSON.stringify(reply, undefined, 2));
                res.json({ success: true, data: reply });
            }
            catch (e) {
                logger.error("POST:/v1/todos/add - ERROR:", e, "\n", e.stack);
                res.json({ success: false, data: { error: e } });
            }
        }));
        // --------------------------------------------------------------------------
        // // --------------------------------------------------------------------------
        // router.post('/item', async (req: express.Request, res: express.Response) => {
        //   const { body } = req;
        //   logger.info("POST:/v1/todos/item - get todo\n" + JSON.stringify(body, undefined, 2));
        //   try {
        //     const reply = await Application.todos.addToDoItem(body)
        //     console.log("POST:/v1/todos/item reply = ", JSON.stringify(reply, undefined, 2));
        //     res.json({success: reply.ok === 1, data: reply});
        //   }
        //   catch (e) {
        //     console.log("POST:/v1/todos/item/add - ERROR:", e, "\n", e.stack);
        //     res.json({success: false, data: {error: e}});
        //   }
        // });
        // // --------------------------------------------------------------------------
        // // --------------------------------------------------------------------------
        // router.put('/item', async (req: express.Request, res: express.Response) => {
        //   const { body } = req;
        //   logger.info("PUT:/v1/todos/item - get todo\n" + JSON.stringify(body, undefined, 2));
        //   try {
        //     const reply = await Application.todos.editToDoItem(body)
        //     console.log("PUT:/v1/todos/item reply = ", JSON.stringify(reply, undefined, 2));
        //     res.json({success: reply.ok === 1, data: reply});
        //   }
        //   catch (e) {
        //     console.log("POST:/v1/todos/item/add - ERROR:", e, "\n", e.stack);
        //     res.json({success: false, data: {error: e}});
        //   }
        // });
        // // --------------------------------------------------------------------------
        // // --------------------------------------------------------------------------
        // router.delete('/item', async (req: express.Request, res: express.Response) => {
        //   const { body } = req;
        //   logger.info("DELETE:/v1/todos/item - get todo\n" + JSON.stringify(body, undefined, 2));
        //   try {
        //     const reply = await Application.todos.deleteToDoItem(body)
        //     console.log("DELETE:/v1/todos/item reply = ", JSON.stringify(reply, undefined, 2));
        //     res.json({success: reply.ok === 1, data: reply});
        //   }
        //   catch (e) {
        //     console.log("POST:/v1/todos/item/add - ERROR:", e, "\n", e.stack);
        //     res.json({success: false, data: {error: e}});
        //   }
        // });
        // // --------------------------------------------------------------------------    
        return router;
    }
}
exports.default = new TodosRoute();
//# sourceMappingURL=todos.route.js.map