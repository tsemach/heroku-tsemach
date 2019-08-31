
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const HerukoDescriptionLinkSchema = new Schema({
  link: String,
  blank: Boolean,
});

const herukoDescriptionSchema = new Schema({
  name: String,
  link: HerukoDescriptionLinkSchema,
});

export default mongoose.model('description', herukoDescriptionSchema);

   