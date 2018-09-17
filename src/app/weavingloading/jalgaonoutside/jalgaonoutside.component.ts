import { Component, OnInit } from '@angular/core';
import { WeavingloadingService } from '../../services/weavingloading.service';

@Component({
  selector: 'app-jalgaonoutside',
  templateUrl: './jalgaonoutside.component.html',
  styleUrls: ['./jalgaonoutside.component.css']
})
export class JalgaonoutsideComponent implements OnInit {
  dataSource : any =[];
  displayedColumns = ['Werks','Weaving_Source','DP_Delivery_Year_Month','Sum_of_Balance_Qty','Sum_of_GP_M'];
  constructor(private weaving: WeavingloadingService) { 
    this.getJalgaonOutsideData();
  }

  ngOnInit() {
  }
  
  getJalgaonOutsideData(){
    this.weaving.getWeavingLoadingData("''","''","''","Summary","6")
      .subscribe((res: any) => {
        console.log(res);
        this.dataSource = res;
      });
  }

}
