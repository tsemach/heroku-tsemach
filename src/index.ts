import * as dotenv from 'dotenv';
dotenv.config();

import Config from './config';
import Server from './express';
import * as mongoose from  'mongoose';

import Color from './utils/color';
import './application/heruko/routes';

// const uri = "mongodb+srv://tsemach:LgA4VfbH0knDwcPh@center-1-kivdh.mongodb.net?retryWrites=true&w=majority";
// const uri = "mongodb://127.0.0.1:27017";
const HERUKO = 'http://localhost:8080/heruko'
console.log("NODE_ENV:", process.env.NODE_ENV);

function toColor(name: string, value: string) {
  return `${Color.cyan}${name}: ${Color.yellow}${value}${Color.reset}`
}

const uri = Config.heruko.MONGODB_URL

mongoose.set('useFindAndModify', false);
mongoose.connect(uri, {dbName: 'heruko'});
mongoose.connection.once('open', () => {
  console.log('connected to heruko database at:', uri);
  console.log(`command:
  [
    ${toColor("name", '   add application')}    
    ${toColor("example", `curl -X POST ${HERUKO}/application -H "Content-Type: application/json" -d \'{"name": "typescript-txjs", "text": "TypeScript TxJS", "order": "5"}\'`)}
  [
  [
    ${toColor("name", "   get applications")}
    ${toColor("example", `curl ${HERUKO}/applications`)}
  ]
  [
    ${toColor("name", "   get description")}
    ${toColor("example", `curl ${HERUKO}/description?name=react-css`)}
  ]
  [
    ${toColor("name", "   get desctriptions")}
    ${toColor("example", `curl ${HERUKO}/descriptions`)}
  ]
  `);});

const port = process.env.PORT || 8080;

Server.instance.listen('localhost', +port);
