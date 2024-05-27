import { Component, OnInit, ViewChild } from '@angular/core';
import { ReconciliationService } from './reconciliation.service';

import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { NzSelectSizeType } from 'ng-zorro-antd/select';

    export enum type {
        BANK = 'bank',
        CASHBOOK = 'cashbook',
    }

interface DataItem {
  reconstart: Date;
  reconend: Date;
  file_one: String;
  file_two: String;
  result_message: String;
  discrepencies: String;
  accessProfile: String;
  status: String;
}

@Component({
  selector: 'app-reconciliation',
  templateUrl: './reconciliation.component.html',
  styleUrls: ['./reconciliation.component.scss'],
})

export class ReconciliationComponent implements OnInit {
public searchtickets:any;
public discrepancyitemArray:any[] = [];
    public reconciliation:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        reconstart: '',
        reconend: '',
        file_one: '',
        file_two: '',
        result_message: '',
        discrepencies: '',
    }
    public discrepancy:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        discid: '',
        message: '',
        type: '',
    }
    public statement:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        reconid: '',
        type: '',
        transactiondate: '',
        details: '',
        debit: '',
        credit: '',
        balance: '',
        ismatch: '',
        matchid: '',
    }

    isVisibleCreate = false;
    isVisibleUpdate = false;
    size: NzSelectSizeType = 'default';




    constructor (
        private nzMessageService: NzMessageService,
        private reconciliationService: ReconciliationService,
    ) { }

    ngOnInit() {
        this.GetAllValues();
        this.discrepancyGetAllValues();
        this.reconciliation.created_by = sessionStorage.getItem('email') || ''; 
        this.discrepancy.created_by = sessionStorage.getItem('email') || ''; 
        this.statement.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }

   showModal(): void {
    this.isVisibleCreate = true;
   }

  handleOk(): void {
 
    this.isVisibleCreate = false;
    this.isVisibleUpdate = false;
  }

  handleCancel(): void {
 
    this.isVisibleCreate = false;
    this.isVisibleUpdate = false;
  }




     Create() {
      this.isVisibleCreate = false;
        this.reconciliationService.PostAllreconciliationValues(this.reconciliation).subscribe((data:any) => {
            this.reconciliation.reconstart = '',
            this.reconciliation.reconend = '',
            this.reconciliation.file_one = '',
            this.reconciliation.file_two = '',
            this.reconciliation.result_message = '',
            this.reconciliation.discrepencies = '',
            this.discrepancy.discid = '',
            this.discrepancy.message = '',
            this.discrepancy.type = '',
            this.statement.reconid = '',
            this.statement.type = '',
            this.statement.transactiondate = '',
            this.statement.details = '',
            this.statement.debit = '',
            this.statement.credit = '',
            this.statement.balance = '',
            this.statement.ismatch = '',
            this.statement.matchid = '',
            this.GetAllValues();
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }

    filterStatus = [
      { text: 'Active', value: 'ACTIVE' },
      { text: 'In-Active', value: 'INACTIVE' }
    ];
  
    filterAccessProfile = [
      { text: 'Receptionist', value: 'Receptionist' },
      { text: 'Health Care Provide', value: 'Health Care Provide' }
    ]
  
    
  
    listOfData: DataItem[] = [];

    Update() {
        this.reconciliationService.Updatereconciliation(this.reconciliation).subscribe((data:any) => {
            this.reconciliation.reconstart = '';
            this.reconciliation.reconend = '';
            this.reconciliation.file_one = '';
            this.reconciliation.file_two = '';
            this.reconciliation.result_message = '';
            this.reconciliation.discrepencies = '';
            this.discrepancy.discid = '';
            this.discrepancy.message = '';
            this.discrepancy.type = '';
            this.statement.reconid = '';
            this.statement.type = '';
            this.statement.transactiondate = '';
            this.statement.details = '';
            this.statement.debit = '';
            this.statement.credit = '';
            this.statement.balance = '';
            this.statement.ismatch = '';
            this.statement.matchid = '';
            this.GetAllValues();
            this.isVisibleUpdate = false;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    Delete(deleteid:any) {
        this.reconciliationService.DeletereconciliationValues(deleteid).subscribe((data:any) => {
            this.GetAllValues();
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }

    GetAllValues() {
        this.reconciliationService.GetAllreconciliationValues().subscribe((data: any) => {
            this.listOfData = data;
            console.log(data);
        },
        (error: Error) => {
            console.log('Error', error);
        });
    }
    discrepancyGetAllValues() {
    this.reconciliationService.GetAlldiscrepancyValues().subscribe((data: any) => {
        this.discrepancyitemArray = data;
        console.log(data);
        },
        (error: Error) => {
            console.log('Error', error);
        });
    }


    search(search:any){
    if(search.length >= 2){
        const targetValue: any[] = [];
        this.listOfData.forEach((value: any) => {
            let keys = Object.keys(value);
            for (let i = 0; i < keys.length; i++) {
                if (value[keys[i]] && value[keys[i]].toString().toLocaleLowerCase().includes(search)) {
                    targetValue.push(value);
                    break;
                }
            }
        });
        this.listOfData = targetValue;
        } else {
            this.GetAllValues();
        }
    }


    cancel(): void {
        this.nzMessageService.info('click cancel');
    }

    confirmDelete(data:any): void {
        this.nzMessageService.info('click confirm');
        this.Delete(data.id);
    }

    getUpdateById(data:any){
        this.isVisibleUpdate = true;
        this.reconciliation = data;
        this.discrepancy = data;
        this.statement = data;
    }
}

  