import createLogger from 'logging'; 
const logger = createLogger('Admin');

import axios from 'axios';

import AdminApplicationsModel from '../models/admin-application';
import AdminDescriptionModel from '../models/admin-description';
import AdminContentModel from '../models/admin-content';
import AdminApplicationType from '../common/admin-application.type';

const GITHUB_CONTENT = 'https://raw.githubusercontent.com/tsemach';

class Admin {
  private cname = this.constructor.name;
  constructor() {
  }

  async setContent(name: string, project: string, branch: string) {
    const reply = await axios.get(`${GITHUB_CONTENT}/${project}/${branch}/README.md`);
  
    return AdminContentModel.update(
      { name }, 
      { content: reply.data },
      { upsert: true }
    );    
  }

  addApplication(application: AdminApplicationType) {    
    return AdminApplicationsModel.update(
      {name: application.name},
      { ...application },
      { upsert: true }
    );    
  }

  getApplications(): any {
    logger.info(`${this.prefix('getApplications')} going to get all applications`);

    return AdminApplicationsModel.find({});
  }
  
  getDescripion(name: string): any {
    logger.info(`${this.prefix('getDescripion')} going to get descripion of ${name}`);

    return AdminDescriptionModel.findOne({name});
  }

  getDescripions(): any {
    logger.info(`${this.prefix('getDescripions')} going to get all descriptions`);

    return AdminDescriptionModel.find({});
  }

  // addToDo(data: ToDoAddType) {    
  //   const newTodo = { title: data.title, items: []};

  //   return ToDosModel.findOneAndUpdate(
  //     { _id: data._id }, 
  //     { 
  //       $push: { todos: newTodo }
  //     },
  //     { new: true }
  //   );
  // }

  // /**
  //  * from: https://stackoverflow.com/questions/38751676/insert-a-new-object-into-a-sub-document-array-field-in-mongoose/38766749
  //  */
  // addToDoItem(data: ToDoAddItemType) {
  //   logger.info("[ToDos::addToDoItem] newToDoItem:", JSON.stringify(data, undefined, 2));

  //   const query = {_id: data._id, 'todos._id': data._object_id}
  //   const update = {
  //     $push: {
  //       'todos.$.items': {
  //         header: data.header,
  //         isCompleted: data.isCompleted
  //       }
  //     }
  //   }
  //   const options = { new: true };
  //   return ToDosModel.findOneAndUpdate(query, update, options);           
  // }

  // /**
  //  * from: https://stackoverflow.com/questions/23577123/updating-a-nested-array-with-mongodb
  //  */
  // editToDoItem(data: ToDoEditedType) {
  //   logger.info("[ToDos::editToDoItem] editToDoItem:", JSON.stringify(data, undefined, 2));

  //   return ToDosModel.updateOne(
  //     {
  //       "_id": data._id,
  //       "todos": {
  //         "$elemMatch": {
  //           "_id": data._object_id, "items._id": data._item_id
  //         }
  //       }
  //     },
  //     {
  //       "$set": {
  //         "todos.$[outer].items.$[inner].header": data.header,
  //         "todos.$[outer].items.$[inner].isCompleted": data.isCompleted
  //       },
  //     },
  //     {
  //       "arrayFilters": [{ "outer._id": data._object_id},{ "inner._id": data._item_id }]
  //     }
  //   );
  // }

  // deleteToDoItem(data: ToDoDeleteType) {
  //   logger.info("[ToDos::deleteToDoItem] data:", JSON.stringify(data, undefined, 2));
  //   return ToDosModel.updateOne(
  //     {
  //       "_id": data._id,
  //       "todos": {
  //         "$elemMatch": {
  //           "_id": data._object_id
  //         }
  //       }
  //     },
  //     {
  //       "$pull": {
  //         "todos.$[outer].items": {_id: data._item_id},          
  //       },
  //     },
  //     {
  //       "arrayFilters": [{ "outer._id": data._object_id}]
  //     }
  //   );    
  // }

  prefix(from: string) {
    return `[${this.cname}::${from}]`
  }
}

export default Admin;