
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const discrepancySchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   discid: { type: String },
   message: { type: String },
   type: { type: String }
})

const discrepancyModel = mongoose.model('discrepancy', discrepancySchema, 'discrepancy');
export default discrepancyModel;
