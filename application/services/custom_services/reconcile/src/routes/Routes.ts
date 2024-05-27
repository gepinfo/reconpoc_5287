import { Request, Response, NextFunction } from "express";
import { reconciliationController } from '../controller/reconciliationController';


export class Routes {
    private reconciliation: reconciliationController = new reconciliationController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/reconciliation/:id').delete(this.reconciliation.Delete);
app.route('/reconciliation/get/search').get(this.reconciliation.Search);
app.route('/reconciliation/get/update').put(this.reconciliation.SearchForUpdate);
app.route('/reconciliation').put(this.reconciliation.Update);
app.route('/reconciliation/:id').get(this.reconciliation.GetEntityById);
app.route('/reconciliation').get(this.reconciliation.GetAllValues);
app.route('/reconciliation').post(this.reconciliation.Create);
app.route('/reconciliation/userid/created_by').get(this.reconciliation.GetNounCreatedBy);
     }

}