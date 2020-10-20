import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Seccion2RoutingModule } from './seccion2-routing.module';
import { Seccion2Component } from './seccion2.component';


@NgModule({
  declarations: [Seccion2Component],
  imports: [
    CommonModule,
    Seccion2RoutingModule
  ]
})
export class Seccion2Module { }
