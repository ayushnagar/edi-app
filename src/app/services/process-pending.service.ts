import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ProcessPending } from '../models/ProcessPending';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProcessPendingService {

  baseUrl = "https://raymondcentral.com/PropertyAquisitionAPI/api/";

  constructor(private http: Http) { }

  getProcessPendingData(processpending: ProcessPending): Observable<ProcessPending>{
    let urlMethod = "ProcessPending/ReportGeneration" ;
      return this.http.post(this.baseUrl + urlMethod, processpending)
      .pipe(map((res : any) => res.json()));
  }
}
