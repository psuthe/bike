import { Component } from '@angular/core';
import { BikeService, BikeInterface } from './services/bike.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bikes: Array<BikeInterface>;     
  constructor(service: BikeService) {
      service.loadBikes(1).subscribe(bikes => {
        this.bikes = bikes;    
        console.log('bikes: ', bikes); 
      });
  }
}
