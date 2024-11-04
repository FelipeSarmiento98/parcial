import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarVehiculosComponent } from './vehiculos/listar-vehiculos/listar-vehiculos.component';

const routes: Routes = [
  { path: '', component: ListarVehiculosComponent }, // Ruta principal para ListarVehiculosComponent
  { path: '**', redirectTo: '' } // Redirección para rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
