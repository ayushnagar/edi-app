import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeavingloadingService {

  baseUrl = "https://raymondcentral.com/PropertyAquisitionAPI/api/";

  constructor(private http: Http) { }

  getWeavingLoadingData(plant: string, month_year: string, col_Name: string,
              type: string, reporttype : string)
  {
    let methodUrl = "EDIWeavingLoading/getWeavingLoadingData";
    let parameters = methodUrl + "?Plant="+ plant + "&Month_Year=" + month_year + "&col_Name=" + col_Name +
                      "&type=" + type + "&report_type=" + reporttype;
    console.log(parameters);
    return this.http.get(this.baseUrl + parameters)
      .pipe(map((res : any) => res.json()));
  }
}
