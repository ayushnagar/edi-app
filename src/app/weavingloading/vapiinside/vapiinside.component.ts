import { Component, OnInit } from '@angular/core';
import { WeavingloadingService } from '../../services/weavingloading.service';

@Component({
  selector: 'app-vapiinside',
  templateUrl: './vapiinside.component.html',
  styleUrls: ['./vapiinside.component.css']
})
export class VapiinsideComponent implements OnInit {
  dataSource : any =[];
  displayedColumns = ['Werks','Weaving_Source','DP_Delivery_Year_Month','Sum_of_Balance_Qty',
                'Sum_of_GP_M','Grey_Picks_per_Mtr','No_of_Looms','Efficiency',
                'Speed','Per_day_Production','No_of_days_loading','Cummulative_load','Cut_Off'];
  constructor(private weaving: WeavingloadingService) { 
    this.getChindInsideData();
  }

  ngOnInit() {
  }
  
  getChindInsideData(){
    this.weaving.getWeavingLoadingData("''","''","''","Summary","2")
      .subscribe((res: any) => {
        console.log(res);
        this.dataSource = res;
      });
  }

}
