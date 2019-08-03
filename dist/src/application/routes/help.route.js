"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logging_1 = require("logging");
const logger = logging_1.default('SanityRoute');
const express = require("express");
const server_1 = require("../../express/server");
class SanityRoute {
    constructor() {
        server_1.default.instance.route('/help', this);
    }
    add() {
        // route: sanity ------------------------------------------------------------
        let router = express.Router();
        router.get('/', (_, res, __) => {
            res.send(`
-----------------------------------------------------------------------------------
description: getting all todos
method: GET: /v1/todos
example: curl http://localhost:3000/v1/todos
-----------------------------------------------------------------------------------

-----------------------------------------------------------------------------------
description: add new user
method: POST: /v1/user
example: curl -d '{"userName": "user@somewhere.com", "displayName": "User Name"}' -H "Content-Type: application/json" -X POST http://localhost:3000/v1/user
-----------------------------------------------------------------------------------

-----------------------------------------------------------------------------------
description: add todo to user
method: POST: /v1/todos
example: curl -X POST http://localhost:3000/v1/todos -H "Content-Type: application/json" -d '{"_id": "5d433466cc2fd3121814e97e", "title": "add new todo"}'
-----------------------------------------------------------------------------------

-----------------------------------------------------------------------------------
description: add todo to user
method: PUT: /v1/todos/item
example: curl -X PUT http://localhost:3000/v1/todos/item -H "Content-Type: application/json" -d '{"_id": "5d433466cc2fd3121814e97e", "_object_id": "5d442511e0d2af1169b334a5", "header": "add new item", "isCompleted": "false"}'
-----------------------------------------------------------------------------------

-----------------------------------------------------------------------------------
description: add todo to user
method: DELETE: /v1/todos/item
example: curl -X DELETE http://localhost:3000/v1/todos/item -H "Content-Type: application/json" -d '{"_id": "5d433466cc2fd3121814e97e", "_object_id": "5d442511e0d2af1169b334a5", "index": "2"}'
-----------------------------------------------------------------------------------
`);
        });
        router.get('/todo', (req, res) => {
            res.json({ success: true, data: { message: 'sanity-route: todo is up' } });
        });
        return router;
        // --------------------------------------------------------------------------
    }
}
exports.default = new SanityRoute();
//# sourceMappingURL=help.route.js.map