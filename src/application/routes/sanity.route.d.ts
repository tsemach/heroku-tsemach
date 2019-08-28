import * as express from 'express';
import Service from '../../express/service.type';
declare class SanityRoute implements Service {
    constructor();
    add(): express.Router;
}
declare const _default: SanityRoute;
export default _default;
