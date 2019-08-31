
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const HerukoContentSchema = new Schema({  
  name: String,
  content: String
});

export default mongoose.model('contents', HerukoContentSchema);


   