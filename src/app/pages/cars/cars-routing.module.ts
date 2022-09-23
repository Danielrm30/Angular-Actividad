import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars.component';
import { CarComponent } from './car/car.component';

const routes: Routes = [
  { path: '', component: CarsComponent },
  { path:'car', component: CarComponent },
  { path:'car/:id', component: CarComponent },
  { path: 'delete/:id', component: CarsComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
