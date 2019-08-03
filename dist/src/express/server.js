"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logging_1 = require("logging");
const logger = logging_1.default('Server');
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
class Server {
    constructor() {
        //public express: express.Application;
        this.app = express();
        console.log("DDDDDDDD: _dirname=", __dirname + '/../../../client/dist/');
        this.app.use(express.static(__dirname + '/../../../client/dist/'));
        this.use(this.logger);
        this.use(bodyParser.json());
        this.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors({ origin: '*' }));
    }
    static get instance() {
        return Server._instance || (Server._instance = new Server());
    }
    logger(req, res, next) {
        // logger.info("request:", JSON.stringify(req, undefined, 2));
        next();
    }
    init(middlewares) {
        if (middlewares) {
            middlewares.forEach(m => {
                this.use(m);
            });
        }
    }
    use(middleware) {
        this.app.use(middleware);
    }
    middleware(where, middleware) {
        logger.info("going to add middleware at: " + where);
        this.app.use(where, middleware.add(this.app));
    }
    /**
     * Services are all to add their routes into express application
     *
     * @param where - thed of which the service is route (regular express path)
     * @param service - a class which implement this route
     */
    route(where, service) {
        logger.info("going to add service at: " + where);
        this.app.use(where, service.add(this.app));
    }
    listen(host, port) {
        this.app.listen(port, () => {
            // success callback
            console.log(`Listening at http://${host}:${port}/`);
        });
    }
}
Server._instance = new Server();
exports.default = Server;
//# sourceMappingURL=server.js.map