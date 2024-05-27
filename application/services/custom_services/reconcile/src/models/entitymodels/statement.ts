
export interface statement 
{
   created_date: { type: Date },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date },
   reconid: { type: String },
   type: { type: Type },
   transactiondate: { type: Date },
   details: { type: String },
   debit: { type: Number },
   credit: { type: Number },
   balance: { type: Number },
   ismatch: { type: Boolean },
   matchid: { type: String }
}


export enum Type {
   BANK = 'bank',
   CASHBOOK = 'cashbook'
}



