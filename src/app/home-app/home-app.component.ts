import { Component, OnInit } from '@angular/core';

import { ReportsService } from '../services/reports.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-app',
  templateUrl: './home-app.component.html',
  styleUrls: ['./home-app.component.css'],
  providers : [ReportsService]
})
export class HomeAppComponent implements OnInit {

  reports : any = []
  reportName : string;

  constructor(private reportServ: ReportsService, private route: Router) { 
    this.getReportList();
  }

  ngOnInit() {
  }

  getReportList(){
    this.reportServ.getReportList()
      .subscribe((res : any) => {
        //console.log(res);
        this.reports = res;
      });
  }

  redirectreport(){
    this.reportName = 'weavingloading'
    this.route.navigate(['/' + this.reportName]);
  }

}
