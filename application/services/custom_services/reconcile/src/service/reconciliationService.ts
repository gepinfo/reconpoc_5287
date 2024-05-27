import { Request, Response } from 'express';
import {reconciliationDao} from '../dao/reconciliationDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';

















let reconciliation = new reconciliationDao();

export class reconciliationService {
    
    constructor() { }
    
    public  Delete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into reconciliationService.ts: Delete')
     let  reconciliationId = req.params.id;
     reconciliation.Delete(reconciliationId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from reconciliationService.ts: Delete')
             
             
            callback(response);

         });
    }
    
public  Search(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into reconciliationService.ts: Search')
     let  reconciliationData = req.query;
     reconciliation.Search(reconciliationData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from reconciliationService.ts: Search')
             
             
            callback(response);

         });
    }
    
public  SearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into reconciliationService.ts: SearchForUpdate')
     let  reconciliationData = req.body;
     reconciliation.SearchForUpdate(reconciliationData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from reconciliationService.ts: SearchForUpdate')
             
             
            callback(response);

         });
    }
    
public  Update(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into reconciliationService.ts: Update')
     let  reconciliationData = req.body;
     reconciliation.Update(reconciliationData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from reconciliationService.ts: Update')
             
             
            callback(response);

         });
    }
    
public  GetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into reconciliationService.ts: GetEntityById')
     let  reconciliationId = req.params.id;
     reconciliation.GetEntityById(reconciliationId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from reconciliationService.ts: GetEntityById')
             
             
            callback(response);

         });
    }
    
public  GetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into reconciliationService.ts: GetAllValues')
     
     reconciliation.GetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from reconciliationService.ts: GetAllValues')
             
             
            callback(response);

         });
    }
    
public  Create(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into reconciliationService.ts: Create')
     let  reconciliationData = req.body;
     reconciliation.Create(reconciliationData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from reconciliationService.ts: Create')
             
             
            callback(response);

         });
    }
    
public  GetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into reconciliationService.ts: GetNounCreatedBy')
     let  reconciliationData = { created_by: req.query.createdby };
     reconciliation.GetNounCreatedBy(reconciliationData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from reconciliationService.ts: GetNounCreatedBy')
             
             
            callback(response);

         });
    }
    
    
    
    
}