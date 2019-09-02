"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common = {};
exports.default = {
    development: Object.assign({ MONGODB_URL: process.env.MONGODB_DEV_URL }, common),
    test: Object.assign({ MONGODB_URL: process.env.MONGODB_DEV_URL }, common),
    production: Object.assign({ MONGODB_URL: process.env.MONGODB_PRD_URL }, common),
};
//# sourceMappingURL=heruko.config.js.map