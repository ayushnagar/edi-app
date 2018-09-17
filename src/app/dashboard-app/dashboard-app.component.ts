import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { ProcessPendingService } from '../services/process-pending.service';
import { ProcessPending } from '../models/ProcessPending';

@Component({
  selector: 'app-dashboard-app',
  templateUrl: './dashboard-app.component.html',
  styleUrls: ['./dashboard-app.component.css'],
  providers : [ProcessPendingService]
})
export class DashboardAppComponent {
  displayedColumns: string[] = ['Plant', 'FinishMonth', 'Civil', 'Exotic','RMG','Export','Exclusive',
                                'Inst','GrandTotal','TotalOrderQty','Balance','OTOB'];
  dataSource = [];

  processPending: ProcessPending;

  reports : any = [{header : "Spinning Leveling", content : "Spinning Leveling Content"},
                   {header : "Sim Confirmation", content : "Sim Confirmation Content"},
                   {header : "YPP99", content : "YPP99 Content"},
                   {header : "Purchase Status Report", content : "Purchase Status Report Content"},
                   {header : "Sim Confirmation", content : "Sim Confirmation Content"},
                   {header : "Sim Confirmation", content : "Sim Confirmation Content"},
                   {header : "Sim Confirmation", content : "Sim Confirmation Content"},
                   {header : "Sim Confirmation", content : "Sim Confirmation Content"},
                   {header : "Sim Confirmation", content : "Sim Confirmation Content"}
                  ]

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
      }

      return [
        { id : 1,title: 'Total Marketwise Finishing Order Balance', cols: 3, rows: 1 },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, 
        private processpendingservice: ProcessPendingService) {

          this.processPending = new ProcessPending();
          this.getProcessPendingReport();
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

