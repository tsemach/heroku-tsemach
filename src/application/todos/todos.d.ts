import { ToDoAddItemType, ToDoAddType, ToDoEditedType, ToDoDeleteType } from '../commond/todos.type';
declare class ToDos {
    constructor();
    createNewUser(username: string, displayName: string): import("mongoose").DocumentQuery<import("mongoose").Document, import("mongoose").Document, {}>;
    getToDos(username: string): import("mongoose").DocumentQuery<import("mongoose").Document[], import("mongoose").Document, {}>;
    addToDo(data: ToDoAddType): import("mongoose").DocumentQuery<import("mongoose").Document, import("mongoose").Document, {}>;
    /**
     * from: https://stackoverflow.com/questions/38751676/insert-a-new-object-into-a-sub-document-array-field-in-mongoose/38766749
     */
    addToDoItem(data: ToDoAddItemType): import("mongoose").DocumentQuery<import("mongoose").Document, import("mongoose").Document, {}>;
    /**
     * from: https://stackoverflow.com/questions/23577123/updating-a-nested-array-with-mongodb
     */
    editToDoItem(data: ToDoEditedType): import("mongoose").Query<any>;
    deleteToDoItem(data: ToDoDeleteType): import("mongoose").Query<any>;
}
export default ToDos;
