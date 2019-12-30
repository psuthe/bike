import { Component } from '@angular/core';     
import { BikeService, BikeInterface } from '../../services/bike.service';     

@Component({     
selector: 'manage',     
  templateUrl: './manage.component.html',     
  styleUrls: ['./manage.component.css']     
})     
export class ManageComponent {     
  bikes: Array<BikeInterface>;     
  bike: BikeInterface = {"id" : -1, "name" : "", "riderId" : 1, "make" : "", "model" : "", "sinceDate" : null, "totalFeel" : -1, "totalMiles" : -1, "totalDate" : null}; 
  rider: number = 1;    

  constructor(private service: BikeService) {     
    this.service.loadBikes(this.rider).subscribe(bikes => {
      this.bikes = bikes;     
    });  
  }     

  add() {     
    this.service.createBike(this.bike);    
  }     

  remove(symbol) {     
    this.service.deleteBike(this.bike.id);     
  }     
}
