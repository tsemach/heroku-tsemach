import * as dotenv from 'dotenv';
dotenv.config();

import Config from './config';
import Server from './express';
import * as mongoose from  'mongoose';

import Color from './utils/color';
import './application/routes';

console.log("NODE_ENV:", process.env.NODE_ENV);
function toColor(name: string, value: string) {
  return `${Color.cyan}${name}: ${Color.yellow}${value}${Color.reset}`
}

// const uri = "mongodb+srv://tsemach:LgA4VfbH0knDwcPh@center-1-kivdh.mongodb.net?retryWrites=true&w=majority";
// const uri = "mongodb://127.0.0.1:27017";
const ADMIN = 'http://localhost:8081/admin'

const uri = Config.heruko.MONGODB_URL

mongoose.set('useFindAndModify', false);
mongoose.connect(uri, {dbName: 'heruko'});
mongoose.connection.once('open', () => {
  console.log('connected to heruko database at:', uri);
  console.log(`command:
  [
    ${toColor("name", '   set content')}    
    ${toColor("example", 'curl ${ADMIN}/content?name=react-css\\&project=react-css\\&branch=master')}
  ]
  [
    ${toColor("name", '   add application')}    
    ${toColor("example", 'curl -X POST ${ADMIN}/application -H "Content-Type: application/json" -d \'{"name": "typescript-txjs", "text": "TypeScript TxJS", "order": "5"}\'')}
  [
  [
    ${toColor("name", "   get applications")}
    ${toColor("example", 'curl http://localhost:8081/admin/applications')}
  ]
  `);
});

const port = process.env.PORT || 8081;

Server.instance.listen('localhost', +port);
