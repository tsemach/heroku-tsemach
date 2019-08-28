"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const itemsSchema = new Schema({
    header: String,
    isCompleted: Boolean
});
const todosSchema = new Schema({
    displayName: String,
    username: String,
    todos: [
        {
            title: String,
            items: [itemsSchema]
        }
    ]
});
// const todosSchema = new Schema({
//   displayName: String,
//   username: String,
//   todos: [
//     {
//       title: String,
//       items: [
//         {
//           header: String,
//           isCompleted: Boolean
//         }
//
//       ]
//     }
//   ]
// });
exports.default = mongoose.model('Todo', todosSchema);
//# sourceMappingURL=intel-todos.js.map