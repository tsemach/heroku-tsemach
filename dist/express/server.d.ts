import * as express from 'express';
import Service from './service.type';
import Middleware from './middleware.type';
export default class Server {
    private static _instance;
    app: express.Application;
    private constructor();
    static readonly instance: Server;
    private logger;
    init(middlewares: Middleware[]): void;
    use(middleware: any): void;
    middleware(where: string, middleware: Middleware): void;
    /**
     * Services are all to add their routes into express application
     *
     * @param where - thed of which the service is route (regular express path)
     * @param service - a class which implement this route
     */
    route(where: string, service: Service): void;
    listen(host: string, port: number): void;
}
