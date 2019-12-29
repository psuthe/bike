import { Component, OnInit } from '@angular/core';     
import { BikeService, BikeInterface } from '../../services/bike.service';     

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {     
  bikes: Array<BikeInterface>;     
  rider: number = 1;     
  constructor(private service: BikeService) {     
    //this.symbols = service.get();     
  }     

  ngOnInit() {     
  //  this.service.load(this.symbols).subscribe(stocks => this.stocks = stocks); 
    this.service.loadBikes(this.rider).subscribe(bikes => {
      this.bikes = bikes;     
    });
  }     
}
