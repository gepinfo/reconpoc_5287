import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})

export class ReconciliationService {
    constructor(
        private http: HttpClient,
    ) { }


  BaseURL = environment.baseUrlAPI;


  PostAllreconciliationValues(data:any){

    return this.http.post(`${this.BaseURL}/reconciliation`,data);
  }

  GetAllreconciliationValues(){
    return this.http.get(`${this.BaseURL}/reconciliation`);
  }
  GetAlldiscrepancyValues(){
    return this.http.get(`${this.BaseURL}/discrepancy`);
  }

  Updatereconciliation(data:any){
    return this.http.put(`${this.BaseURL}/reconciliation/${data.id}`,data);
  }

  getSpecificreconciliation(id:number){
    return this.http.get(`${this.BaseURL}/reconciliation/${id}`);
  }

  getSpecificreconciliationHistory(id:number){
    return this.http.get(`${this.BaseURL}/reconciliation/${id}/history?days=30`);
  }

  DeletereconciliationValues(dataId:any){
     return this.http.delete(`${this.BaseURL}/reconciliation/${dataId}`);
  }

  GetEntityById(reconciliationId:any): Observable<any> {
    return this.http.get(`${this.BaseURL}/reconciliationid/` + reconciliationId);
  }

  Searchreconciliation(data:any): Observable<any> {
    const temp:any = [];
    const objectKeyPair = Object.entries(data);
    objectKeyPair.forEach((element, index) => {
    if (element[1]) {
    temp.push(`${element[0]}=${element[1]}`);
    }
    });
    let jwt_token = sessionStorage.getItem('JwtToken');
    return this.http.get(`${this.BaseURL}` + `/reconciliation/get/search?jwt_token=${jwt_token}${temp.length > 0 ? `&${temp.join('&')}` : ''}`);
  }
}