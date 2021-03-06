"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
function findItem(data, id) {
    const todo = _.find(data.todos, { items: [{ _id: id }] });
    if (!todo) {
        return null;
    }
    return _.find(todo.items, { _id: id });
}
exports.findItem = findItem;
// function replace ff
// todo = _.find(data.todos, { items: [ { _id: "5d457514ccd132570f29ad5d" } ]});
// item = _.find(todo.items, { _id: "5d457514ccd132570f29ad5d"});
// console.log("GOOD: item=", JSON.stringify(item, undefined, 2));
// item.header =  "changed UUUUUUUUUUUUUUUUUUUU";
// item._id = "1234";
// item.isCompleted = true;
// todo = _.find(data.todos, { items: [ { _id: "1234" } ]});
// item = _.find(todo.items, { _id: "1234"});
// console.log("GOOD: todo=", JSON.stringify(todo, undefined, 2));
// //item = _.find(todo.items, { _id: "5d457514ccd132570f29ad5d"});
//# sourceMappingURL=utils.js.map