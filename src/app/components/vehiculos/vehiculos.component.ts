import { Component, OnInit } from '@angular/core';
import { Vehiculo } from './model/vehiculo';
import { VEHICULOS } from './vehiculo.json';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styles: [
  ]
})
export class VehiculosComponent implements OnInit {

  vehiculos: Vehiculo[];

  constructor() { }

  ngOnInit(): void {
    this.vehiculos = VEHICULOS;
  }

}
