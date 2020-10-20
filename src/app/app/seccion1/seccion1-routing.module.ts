import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Seccion1Component } from './seccion1.component';

const routes: Routes = [{ path: '', component: Seccion1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Seccion1RoutingModule { }
