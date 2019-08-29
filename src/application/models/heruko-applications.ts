
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const herukoApplicationsSchema = new Schema({
  text: String,
  name: String,
  link: String,
  order: Number,
  isBlank: Boolean
});

export default mongoose.model('applications', herukoApplicationsSchema);

   