"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todos_1 = require("./todos/todos");
class Application {
    constructor() {
        this._todos = new todos_1.default();
    }
    get todos() {
        return this._todos;
    }
}
exports.default = new Application();
//# sourceMappingURL=application.js.map