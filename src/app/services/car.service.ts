import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../model/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>('http://localhost:3000/cars');
  }

  newCar(car: Car): Observable<Car> {
    return this.http.post<Car>('http://localhost:3000/cars',car);
  }

  getCar(id: number): Observable<Car> {
    return this.http.get<Car>('http://localhost:3000/cars/' + id);
  }

  editCar(car: Car,id:number): Observable<Car> {
    return this.http.put<Car>('http://localhost:3000/cars' + id,car);
  }

  deleteCar(id:number): Observable<ArrayBuffer> {
    return this.http.delete<ArrayBuffer>('http://localhost:3000/cars/'+id);
    }

}
