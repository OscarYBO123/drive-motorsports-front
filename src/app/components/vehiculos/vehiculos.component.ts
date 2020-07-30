import { Component, OnInit } from '@angular/core';
import { Vehiculo } from './model/vehiculo';
import { VehiculoService } from './service/vehiculo.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styles: [
  ]
})
export class VehiculosComponent implements OnInit {

  vehiculos: Vehiculo[];

  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit(): void {
    this.vehiculoService.getVehiculos().subscribe(
      (vehiculos) => {
        this.vehiculos = vehiculos
      }
    );
  }

}
