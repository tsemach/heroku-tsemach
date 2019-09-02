"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const HerukoContentSchema = new Schema({
    name: String,
    content: String
});
exports.default = mongoose.model('contents', HerukoContentSchema);
//# sourceMappingURL=heruko-content.js.map