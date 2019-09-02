"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const herukoApplicationsSchema = new Schema({
    text: String,
    name: String,
    order: Number,
});
exports.default = mongoose.model('applications', herukoApplicationsSchema);
//# sourceMappingURL=heruko-applications.js.map