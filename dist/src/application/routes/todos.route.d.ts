import * as express from 'express';
import Service from '../../express/service.type';
declare class TodosRoute implements Service {
    constructor();
    add(): express.Router;
}
declare const _default: TodosRoute;
export default _default;
