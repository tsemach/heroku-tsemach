import createLogger from 'logging'; 
const logger = createLogger('Heruko');

import HerukoApplicationsModel from './models/heruko-applications';
import HerukoDescriptionModel from './models/heruko-description';
import HerukoApplicationType from './common/heruko-application.type';

class Heruko {
  private cname = this.constructor.name;
  constructor() {
  }

  addApplication(application: HerukoApplicationType) {    
    return HerukoApplicationsModel.update(
      {name: application.name},
      { ...application },
      { upsert: true }
    );    
  }

  getApplications(): any {
    logger.info(`${this.prefix('getApplications')} going to get all applications`);

    return HerukoApplicationsModel.find({});
  }
  
  getDescripion(name: string): any {
    logger.info(`${this.prefix('getDescripion')} going to get descripion of ${name}`);

    // return HerukoDescriptionModel.aggregate([
    //   {$match: {name}}, 
    //   {$lookup: {from: "contents", localField: "name", foreignField: "name", as: "content"}}
    // ]);
    
    // return HerukoDescriptionModel.aggregate([
    //   {$match: {name}}, 
    //   [{$match: {name: 'react-css'}}, {$lookup: {from: "contents", localField: "name", foreignField: "name", as: "temp"}}, {$project: {github: 1, name: 1, project: 1, npmurl: 1, content: "$temp.content"}}]
    return HerukoDescriptionModel.aggregate([
      {$match: {name}}, 
      {$lookup: {from: "contents", localField: "name", foreignField: "name", as: "temp"}},       
      {$project: {github: 1, name: 1, project: 1, npmurl: 1, content: {'$arrayElemAt': ['$temp.content', 0] } }}
    ]);

    // return HerukoDescriptionModel.findOne({name});
  }

  getDescripions(): any {
    logger.info(`${this.prefix('getDescripions')} going to get all descriptions`);

    return HerukoDescriptionModel.find({});
  }















  // createNewUser(username: string, displayName: string) {
  //   console.log(`[ToDos:createNewUser] got ${username} ${displayName}`);

  //   const query = { username };
  //   const update = { username, displayName, todos: [] };
  //   //options = { upsert: true, new: true, setDefaultsOnInsert: true };
  //   const options = { upsert: true, new: true};
        
  //   return ToDosModel.findOneAndUpdate(query, update, options);
  // }

  // getToDos(username: string) {

  //   return ToDosModel.find({username});
  // }

  // getApplications(): any {
  //   logger.info(`${this.prefix('getApplications')} going to get all applications`);

  //   return HerukoApplicationsModel.find({});
  // }
  
  // getDescripion(name: string): any {
  //   logger.info(`${this.prefix('getDescripion')} going to get descripion of ${name}`);

  //   return HerukoDescriptionModel.findOne({name});
  // }

  // getDescripions(): any {
  //   logger.info(`${this.prefix('getDescripions')} going to get all descriptions`);

  //   return HerukoDescriptionModel.find({});
  // }

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

export default Heruko;