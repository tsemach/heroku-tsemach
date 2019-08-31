
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AdminDescriptionLinkSchema = new Schema({
  link: String,
  blank: Boolean,  
});

const AdminDescriptionSchema = new Schema({
  name: String,
  link: AdminDescriptionLinkSchema,
});

export default mongoose.model('descriptions', AdminDescriptionSchema);

   