import { Component, OnInit } from '@angular/core';
import { WeavingloadingService } from '../../services/weavingloading.service';

@Component({
  selector: 'app-chindoutside',
  templateUrl: './chindoutside.component.html',
  styleUrls: ['./chindoutside.component.css']
})
export class ChindoutsideComponent implements OnInit {
  dataSource : any =[];
  displayedColumns = ['Werks','Weaving_Source','DP_Delivery_Year_Month','Sum_of_Balance_Qty','Sum_of_GP_M'];
  constructor(private weaving: WeavingloadingService) { 
    this.getChindOutsideData();
  }

  ngOnInit() {
  }
  
  getChindOutsideData(){
    this.weaving.getWeavingLoadingData("''","''","''","Summary","4")
      .subscribe((res: any) => {
        console.log(res);
        this.dataSource = res;
      });
  }
}
