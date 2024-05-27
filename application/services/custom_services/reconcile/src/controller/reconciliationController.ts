import { Request, Response } from 'express';
import { reconciliationService } from '../service/reconciliationService';
import { CustomLogger } from '../config/Logger'
let reconciliation = new reconciliationService();

export class reconciliationController {
    
    constructor() { }
    
    public Delete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    reconciliation.Delete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into reconciliationController.ts: Delete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from reconciliationController.ts: Delete');
    })}
public Search(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    reconciliation.Search(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into reconciliationController.ts: Search');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from reconciliationController.ts: Search');
    })}
public SearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    reconciliation.SearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into reconciliationController.ts: SearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from reconciliationController.ts: SearchForUpdate');
    })}
public Update(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    reconciliation.Update(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into reconciliationController.ts: Update');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from reconciliationController.ts: Update');
    })}
public GetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    reconciliation.GetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into reconciliationController.ts: GetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from reconciliationController.ts: GetEntityById');
    })}
public GetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    reconciliation.GetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into reconciliationController.ts: GetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from reconciliationController.ts: GetAllValues');
    })}
public Create(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    reconciliation.Create(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into reconciliationController.ts: Create');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from reconciliationController.ts: Create');
    })}
public GetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    reconciliation.GetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into reconciliationController.ts: GetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from reconciliationController.ts: GetNounCreatedBy');
    })}


}