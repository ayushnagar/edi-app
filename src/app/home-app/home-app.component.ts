import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-app',
  templateUrl: './home-app.component.html',
  styleUrls: ['./home-app.component.css']
})
export class HomeAppComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
