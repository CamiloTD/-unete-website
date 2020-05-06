import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './pages/index/index.component'
import { BuildingComponent } from './pages/building/building.component'


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'building', component: BuildingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })] ,
  exports: [RouterModule]
})
export class AppRoutingModule { }
