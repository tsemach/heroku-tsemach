"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const heruko_config_1 = require("./heruko/heruko.config");
const { NODE_ENV = 'development' } = process.env;
class Config {
    constructor() {
        this._basedir = `${__dirname}/../..`;
    }
    get basedir() {
        return this._basedir;
    }
    set basedir(_basedir) {
        this._basedir = _basedir;
    }
    isProduction() {
        return NODE_ENV === 'production';
    }
    get heruko() {
        return heruko_config_1.default[NODE_ENV];
    }
}
exports.default = new Config();
//# sourceMappingURL=config.js.map