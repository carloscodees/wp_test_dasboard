import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Seccion2Component } from './seccion2.component';

const routes: Routes = [{ path: '', component: Seccion2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Seccion2RoutingModule { }
