import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';
import { ListarVehiculosComponent } from './app/vehiculos/listar-vehiculos/listar-vehiculos.component';

const routes: Routes = [
  { path: '', component: ListarVehiculosComponent }, // Ruta principal para ListarVehiculosComponent
  { path: '**', redirectTo: '' } // Redirección para rutas no encontradas
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes) // Proveedor de rutas con la configuración
  ]
}).catch(err => console.error(err));
