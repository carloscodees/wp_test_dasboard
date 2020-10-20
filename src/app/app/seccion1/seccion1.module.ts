import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Seccion1RoutingModule } from './seccion1-routing.module';
import { Seccion1Component } from './seccion1.component';


@NgModule({
  declarations: [Seccion1Component],
  imports: [
    CommonModule,
    Seccion1RoutingModule
  ]
})
export class Seccion1Module { }
