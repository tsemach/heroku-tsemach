"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const heruko_1 = require("./heruko/heruko");
class Application {
    constructor() {
        this._heuko = new heruko_1.default();
    }
    get heruko() {
        return this._heuko;
    }
}
exports.default = new Application();
//# sourceMappingURL=application.js.map