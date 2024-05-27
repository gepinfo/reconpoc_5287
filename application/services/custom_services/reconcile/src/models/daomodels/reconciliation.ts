
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const reconciliationSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   reconstart: { type: Date },
   reconend: { type: Date },
   file_one: { type: String },
   file_two: { type: String },
   result_message: { type: String },
   discrepencies: { type: String }
})

const reconciliationModel = mongoose.model('reconciliation', reconciliationSchema, 'reconciliation');
export default reconciliationModel;
