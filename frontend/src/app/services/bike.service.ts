import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from  'rxjs';

export interface BikeInterface {     
  id: number; 
  riderId: number;    
  name: string;      
  make: string;  
  model: string;  
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

  loadBikes(riderId: number): Observable<BikeInterface[]>{
    return this.httpClient.get<BikeInterface[]>(`${this.PHP_API_SERVER}/api/read.php/?riderId=${riderId}`);
  }
 
  createBike(bike: BikeInterface): Observable<BikeInterface>{
    return this.httpClient.post<BikeInterface>(`${this.PHP_API_SERVER}/api/create.php`, bike);
  }

  updateBike(bike: BikeInterface){
    return this.httpClient.put<BikeInterface>(`${this.PHP_API_SERVER}/api/update.php`, bike);   
  }

  deleteBike(id: number){
    return this.httpClient.delete<BikeInterface>(`${this.PHP_API_SERVER}/api/delete.php/?id=${id}`);
  }

}
