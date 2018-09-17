import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  baseUrl = "https://raymondcentral.com/PropertyAquisitionAPI/api/";

  constructor(private http: Http) { }

  getReportList(){
    let methodUrl = "ReportList/getReportList";
    return this.http.get(this.baseUrl + methodUrl)
      .pipe(map((res : any) => res.json()));
  }

}
