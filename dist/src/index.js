"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
const config_1 = require("./config");
const express_1 = require("./express");
const mongoose = require("mongoose");
require("./application/routes");
// const uri = "mongodb+srv://tsemach:LgA4VfbH0knDwcPh@center-1-kivdh.mongodb.net?retryWrites=true&w=majority";
// const uri = "mongodb://127.0.0.1:27017";
const uri = config_1.default.heruko.MONGODB_URL;
mongoose.set('useFindAndModify', false);
mongoose.connect(uri, { dbName: 'heruko' });
mongoose.connection.once('open', () => {
    console.log('connected to heruko database at:', uri);
});
const port = process.env.PORT || 8080;
express_1.default.instance.listen('localhost', +port);
//# sourceMappingURL=index.js.map