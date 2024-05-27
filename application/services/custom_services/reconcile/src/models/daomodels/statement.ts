
import * as mongoose from 'mongoose';
import { Type } from '../entitymodels/statement';

const Schema = mongoose.Schema;

export const statementSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   reconid: { type: String },
   type: { type: String, enum: Type },
   transactiondate: { type: Date },
   details: { type: String },
   debit: { type: Number },
   credit: { type: Number },
   balance: { type: Number },
   ismatch: { type: Boolean },
   matchid: { type: String }
})

const statementModel = mongoose.model('statement', statementSchema, 'statement');
export default statementModel;
