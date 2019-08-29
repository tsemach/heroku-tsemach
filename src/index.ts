import * as dotenv from 'dotenv';
dotenv.config();

import Config from './config';
import Server from './express';
import * as mongoose from  'mongoose';

import './application/routes';

// const uri = "mongodb+srv://tsemach:LgA4VfbH0knDwcPh@center-1-kivdh.mongodb.net?retryWrites=true&w=majority";
// const uri = "mongodb://127.0.0.1:27017";

const uri = Config.heruko.MONGODB_URL

mongoose.set('useFindAndModify', false);
mongoose.connect(uri, {dbName: 'heruko'});
mongoose.connection.once('open', () => {
  console.log('connected to heruko database at:', uri);
});

const port = process.env.PORT || 8080;

Server.instance.listen('localhost', +port);
