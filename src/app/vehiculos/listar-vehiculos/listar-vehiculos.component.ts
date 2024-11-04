import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule para los pipes
import { VehiculoService } from '../vehiculo.service';
import { Vehiculo } from '../vehiculo';

@Component({
  selector: 'app-listar-vehiculos',
  standalone: true, // Configurar como componente independiente
  imports: [CommonModule], // Importar CommonModule para el pipe `number`
  templateUrl: './listar-vehiculos.component.html',
  styleUrls: ['./listar-vehiculos.component.css']
})
export class ListarVehiculosComponent {
  vehiculos: Vehiculo[] = [];
  marcasCount: { [marca: string]: number } = {};

  constructor(private vehiculoService: VehiculoService) {}

  ngOnInit(): void {
    this.vehiculoService.getVehiculos().subscribe((data) => {
      this.vehiculos = data;
      this.countByMarca();
    });
  }

  countByMarca(): void {
    this.marcasCount = this.vehiculos.reduce((acc: { [marca: string]: number }, vehiculo) => {
      acc[vehiculo.marca] = (acc[vehiculo.marca] || 0) + 1;
      return acc;
    }, {} as { [marca: string]: number });
  }
}
