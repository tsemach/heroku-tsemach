
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const herukoApplicationsSchema = new Schema({
  text: String,
  name: String,
  order: Number,
});

export default mongoose.model('applications', herukoApplicationsSchema);

   