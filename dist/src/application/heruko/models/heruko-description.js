"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const HerukoDescriptionLinkSchema = new Schema({
    link: String,
    blank: Boolean,
});
const herukoDescriptionSchema = new Schema({
    name: String,
    link: HerukoDescriptionLinkSchema,
});
exports.default = mongoose.model('description', herukoDescriptionSchema);
//# sourceMappingURL=heruko-description.js.map