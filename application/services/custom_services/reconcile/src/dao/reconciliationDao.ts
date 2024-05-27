import * as mongoose from 'mongoose';
import reconciliationModel from '../models/daomodels/reconciliation';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'




export class reconciliationDao {
    private reconciliation = reconciliationModel;

    

    constructor() { }
    
    public async Delete(reconciliationId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into reconciliationDao.ts: Delete');

    

    
    
    
    this.reconciliation.findByIdAndRemove(reconciliationId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from reconciliationDao.ts: Delete');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Search(reconciliationData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into reconciliationDao.ts: Search');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(reconciliationData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.reconciliation.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from reconciliationDao.ts: Search');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async SearchForUpdate(reconciliationData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into reconciliationDao.ts: SearchForUpdate');

    

    
    
    
    this.reconciliation.findOneAndUpdate({ _id: reconciliationData._id }, reconciliationData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from reconciliationDao.ts: SearchForUpdate');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Update(reconciliationData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into reconciliationDao.ts: Update');

    

    
    
    
    this.reconciliation.findOneAndUpdate({ _id: reconciliationData._id }, reconciliationData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from reconciliationDao.ts: Update');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetEntityById(reconciliationId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into reconciliationDao.ts: GetEntityById');

    

    
    
    
    this.reconciliation.findById(reconciliationId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from reconciliationDao.ts: GetEntityById');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into reconciliationDao.ts: GetAllValues');

    

    
    
    
    this.reconciliation.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from reconciliationDao.ts: GetAllValues');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Create(reconciliationData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into reconciliationDao.ts: Create');

    let temp = new reconciliationModel(reconciliationData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from reconciliationDao.ts: Create');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetNounCreatedBy(reconciliationData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into reconciliationDao.ts: GetNounCreatedBy');

    

    
    
    
    this.reconciliation.aggregate(([
                        { $match: { $and: [{ created_by: reconciliationData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from reconciliationDao.ts: GetNounCreatedBy');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}


}