"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logging_1 = require("logging");
const logger = logging_1.default('ToDos');
const intel_todos_1 = require("../models/intel-todos");
class ToDos {
    constructor() {
    }
    createNewUser(username, displayName) {
        console.log(`[ToDos:createNewUser] got ${username} ${displayName}`);
        const query = { username };
        const update = { username, displayName, todos: [] };
        //options = { upsert: true, new: true, setDefaultsOnInsert: true };
        const options = { upsert: true, new: true };
        return intel_todos_1.default.findOneAndUpdate(query, update, options);
    }
    getToDos(username) {
        logger.info('[ToDos::getToDos] going to get todos for username:', username);
        return intel_todos_1.default.find({ username });
    }
    addToDo(data) {
        const newTodo = { title: data.title, items: [] };
        return intel_todos_1.default.findOneAndUpdate({ _id: data._id }, {
            $push: { todos: newTodo }
        }, { new: true });
    }
    /**
     * from: https://stackoverflow.com/questions/38751676/insert-a-new-object-into-a-sub-document-array-field-in-mongoose/38766749
     */
    addToDoItem(data) {
        logger.info("[ToDos::addToDoItem] newToDoItem:", JSON.stringify(data, undefined, 2));
        const query = { _id: data._id, 'todos._id': data._object_id };
        const update = {
            $push: {
                'todos.$.items': {
                    header: data.header,
                    isCompleted: data.isCompleted
                }
            }
        };
        const options = { new: true };
        return intel_todos_1.default.findOneAndUpdate(query, update, options);
    }
    /**
     * from: https://stackoverflow.com/questions/23577123/updating-a-nested-array-with-mongodb
     */
    editToDoItem(data) {
        logger.info("[ToDos::editToDoItem] editToDoItem:", JSON.stringify(data, undefined, 2));
        return intel_todos_1.default.updateOne({
            "_id": data._id,
            "todos": {
                "$elemMatch": {
                    "_id": data._object_id, "items._id": data._item_id
                }
            }
        }, {
            "$set": {
                "todos.$[outer].items.$[inner].header": data.header,
                "todos.$[outer].items.$[inner].isCompleted": data.isCompleted
            },
        }, {
            "arrayFilters": [{ "outer._id": data._object_id }, { "inner._id": data._item_id }]
        });
    }
    deleteToDoItem(data) {
        logger.info("[ToDos::deleteToDoItem] data:", JSON.stringify(data, undefined, 2));
        return intel_todos_1.default.updateOne({
            "_id": data._id,
            "todos": {
                "$elemMatch": {
                    "_id": data._object_id
                }
            }
        }, {
            "$pull": {
                "todos.$[outer].items": { _id: data._item_id },
            },
        }, {
            "arrayFilters": [{ "outer._id": data._object_id }]
        });
    }
}
exports.default = ToDos;
//# sourceMappingURL=todos.js.map