import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: 'home',loadChildren:  () => import('./pages/home/home.module').then(m => m.HomeModule)},
  { path: 'about',loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)},
  { path: 'cars', loadChildren: () => import('./pages/cars/cars.module').then(m => m.CarsModule) },
  { path: '**',redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
