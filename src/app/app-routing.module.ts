
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: '#seccion1', loadChildren: () => import('./app/seccion1/seccion1.module').then(m => m.Seccion1Module) },
   { path: '#seccion2', loadChildren: () => import('./app/seccion2/seccion2.module').then(m => m.Seccion2Module) }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }