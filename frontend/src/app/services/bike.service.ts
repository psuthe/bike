import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from  'rxjs';



export interface Bike {     
  id: number; 
  riderId: number;    
  name: string;     
  description: string; 
  make: string;  
  sinceDate: Date; 
  totalFeet: number; 
  totalMiles: number;  
  totalDate: Date;      
} 

@Injectable({
  providedIn: 'root'
})
export class BikeService {

 PHP_API_SERVER: string = 'http://127.0.0.1:8080';

  constructor(private httpClient: HttpClient) { }

  loadBikes(riderId: number): Observable<Bike[]>{
    return this.httpClient.get<Bike[]>(`${this.PHP_API_SERVER}/api/read.php/?riderId=${riderId}`);
  }
 
  createBike(bike: Bike): Observable<Bike>{
    return this.httpClient.post<Bike>(`${this.PHP_API_SERVER}/api/create.php`, bike);
  }

  updateBike(bike: Bike){
    return this.httpClient.put<Bike>(`${this.PHP_API_SERVER}/api/update.php`, bike);   
  }

  deleteBike(id: number){
    return this.httpClient.delete<Bike>(`${this.PHP_API_SERVER}/api/delete.php/?id=${id}`);
  }

}
