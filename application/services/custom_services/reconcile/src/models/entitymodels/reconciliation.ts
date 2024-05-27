
export interface reconciliation 
{
   created_date: { type: Date },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date },
   reconstart: { type: Date },
   reconend: { type: Date },
   file_one: { type: String },
   file_two: { type: String },
   result_message: { type: String },
   discrepencies: [{ type: String, ref: 'discrepancy' }]
}



