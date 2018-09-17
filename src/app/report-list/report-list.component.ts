import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../services/reports.service';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css'],
  providers:[ReportsService]
})
export class ReportListComponent implements OnInit {

  panelOpenState = false;
  report : any =[];
  constructor(private reportServ: ReportsService) { 
    this.getReportList();
  }

  ngOnInit() {
  }

  getReportList(){
    this.reportServ.getReportList()
      .subscribe((res : any) => {
        this.report = res;
      });
  }

}
