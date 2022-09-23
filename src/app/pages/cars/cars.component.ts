import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/model/car.model';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

dataSource: MatTableDataSource<Car> = new MatTableDataSource<Car>();
displayedColumns = ['id','brand','model','year','transmission','color','actions'];
idCar?: number;
title: string = ''
  constructor(
    private carService: CarService,
    private router: Router,
    private activatedRoute: ActivatedRoute

    ) {
      this.activatedRoute.params.subscribe({
        next: (params) => {
          //* Edición
          if(params['id']){
            this.idCar = params['id'];
            this.title = 'Editar Carro';
            if(this.idCar) {

              this.delete(this.idCar);
            }
          }else{
            this.loadCars();

            //* Creación
            this.title = 'Crear Usuario';
          }
        },
      });
  }
  delete(id: number) {
    this.carService.deleteCar(id).subscribe({
      next: () => {

        console.log('Auto Eliminado');
        this.router.navigateByUrl('/cars');
      },
      error: () => {
        alert('Ocurrió un error al eliminar el Auto ');
      }
    })
  }

  ngOnInit(): void {
  }

  loadCars():void {
    this.carService.getCars().subscribe({
      next: (cars) => {
        this.dataSource.data = cars;
      },
      error: () => {
        alert('Ocurrió un error')
      },
    });
  }
}
