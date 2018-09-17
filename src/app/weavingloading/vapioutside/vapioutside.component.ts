import { Component, OnInit } from '@angular/core';
import { WeavingloadingService } from '../../services/weavingloading.service';

@Component({
  selector: 'app-vapioutside',
  templateUrl: './vapioutside.component.html',
  styleUrls: ['./vapioutside.component.css']
})
export class VapioutsideComponent implements OnInit {

  dataSource : any =[];
  displayedColumns = ['Werks','Weaving_Source','DP_Delivery_Year_Month','Sum_of_Balance_Qty','Sum_of_GP_M'];
  constructor(private weaving: WeavingloadingService) { 
    this.getJalgaonOutsideData();
  }

  ngOnInit() {
  }
  
  getJalgaonOutsideData(){
    this.weaving.getWeavingLoadingData("''","''","''","Summary","5")
      .subscribe((res: any) => {
        console.log(res);
        this.dataSource = res;
      });
  }
}
