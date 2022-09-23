import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/model/car.model';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  formCar?: FormGroup
  title: string = '';
  idCar?: number;

  constructor(
    private fb: FormBuilder,
    private carService: CarService,
    private router: Router,
    private ativatedRoute: ActivatedRoute
    ) {
   this.formCar = this.fb.group({
      brand: ['',[Validators.required,Validators.minLength(2)]],
      model: ['',[Validators.required,Validators.minLength(2)]],
      year: ['',[Validators.required,Validators.minLength(4)]],
      transmission: ['',Validators.required],
      color: ['',[Validators.required,Validators.minLength(4)]],
    })

    this.ativatedRoute.params.subscribe({
      next: (params) => {
        //* Edición
        if(params['id']){
          this.idCar = params['id'];
          this.title = 'Editar Carro';
          this.loadCar();


        }else{ //* Creación
          this.title ='Crear Solicitud de Carro';
        }
      }
    })
  }


  ngOnInit(): void {
  }

  loadCar(): void {
    if(this.idCar){

      this.carService.getCar(this.idCar).subscribe({
        next: (car) => {
          this.formCar?.patchValue(car);
        },
        error: () => {
          alert('Ocurrió un error al editar o no existe el carro');
        }
      })
    }
  }

  save(): void {

    const car: Car = this.formCar?.value as Car;
    
    if(this.idCar) {
      this.carService.editCar(car, this.idCar).subscribe({
        next: () => {
          this.router.navigateByUrl('/cars')

        },
        error: () => {
          alert('Ocurrió un error');
        }
      })

    } else{

      this.carService.newCar(car).subscribe({
        next: () => {
          this.router.navigateByUrl('/cars')
        },
        error: () => {
          alert('Ocurrió un error');
        },
      });
    }
  }
}
