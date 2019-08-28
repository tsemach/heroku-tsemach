"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
const express_1 = require("./express");
const mongoose = require("mongoose");
require("./application/routes");
const uri = "mongodb+srv://tsemach:LgA4VfbH0knDwcPh@center-1-kivdh.mongodb.net?retryWrites=true&w=majority";
mongoose.set('useFindAndModify', false);
mongoose.connect(uri, { dbName: 'intel-todo' });
mongoose.connection.once('open', () => {
    console.log('connected to todos database');
});
const port = process.env.PORT || 8080;
express_1.default.instance.listen('localhost', +port);
//# sourceMappingURL=index.js.map