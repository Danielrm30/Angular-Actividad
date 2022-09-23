import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './cars.component';
import { TableModule } from 'src/app/components/table/table.module';
import { CarComponent } from './car/car.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule }  from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [
    CarsComponent,
    CarComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    TableModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule

  ],
})
export class CarsModule { }
