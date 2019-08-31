
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AdminContentSchema = new Schema({  
  name: String,
  content: String
});

export default mongoose.model('contents', AdminContentSchema);


   