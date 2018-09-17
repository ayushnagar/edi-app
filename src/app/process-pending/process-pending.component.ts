import { Component, OnInit } from '@angular/core';

import { ProcessPendingService } from '../services/process-pending.service';
import { ProcessPending } from '../models/ProcessPending';

@Component({
  selector: 'app-process-pending',
  templateUrl: './process-pending.component.html',
  styleUrls: ['./process-pending.component.css']
})
export class ProcessPendingComponent implements OnInit {

  displayedColumns: string[] = ['Plant', 'FinishMonth', 'Civil','Combo' ,'Exotic','RMG','Export','Exclusive',
                                'Inst','GrandTotal','TotalOrderQty','Balance','OTOB'];
  dataSource = [];

  reportName = "Total Marketwise Finishing Order Balance";

  processPending: ProcessPending;

  constructor(private processpendingservice: ProcessPendingService) {
    this.processPending = new ProcessPending();
    this.getProcessPendingReport();
   }

  ngOnInit() {
  }

  getProcessPendingReport(){
    this.processPending.Plant = '';
    this.processPending.Market = '';
    this.processPending.Month_Year = '';
    this.processPending.Report_Type = 'Complete';

    this.processpendingservice.getProcessPendingData(this.processPending)
      .subscribe((res : any) =>{
        this.dataSource = res;
      });

      
  }

}
