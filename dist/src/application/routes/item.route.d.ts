import * as express from 'express';
import Service from '../../express/service.type';
declare class ItemRoute implements Service {
    constructor();
    add(): express.Router;
}
declare const _default: ItemRoute;
export default _default;
