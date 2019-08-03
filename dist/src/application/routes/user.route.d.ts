import * as express from 'express';
import Service from '../../express/service.type';
/**
 * API:
 *  GET - /user: return list of users
 *  GET - /user?username="tsemach@intel.com": return list of users
 */
declare class UserRoute implements Service {
    constructor();
    add(): express.Router;
}
declare const _default: UserRoute;
export default _default;
