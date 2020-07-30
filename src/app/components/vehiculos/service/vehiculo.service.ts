import { Injectable } from '@angular/core';
import { Vehiculo } from '../model/vehiculo';
import { Observable, of } from "rxjs";
import { map } from 'rxjs/operators';

//despues de importar HttpClient en app.moduler se agrega en el servicio del component
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VehiculoService {
  private urlGetVehiculos: string = 'http://localhost:8080/api/vehiculos';

  //se inyecta HttpClient
  constructor(private http: HttpClient) { }

  // Una forma de obtener los datos de la respuesta back
  /*getVehiculos(): Observable<Vehiculo[]> {
    //se castea la respuesta al tipo de dato que se debe de adquirir el formatoi JSON
    return this.http.get<Vehiculo[]>(this.urlGetVehiculos);
  }*/

  //forma de arrown function, otra forma de obtener los datos del back.
  getVehiculos() : Observable<Vehiculo[]> {
    //no se castea el JSON solo se convierte al tipo de dato que asignamos
    return this.http.get(this.urlGetVehiculos).pipe(
      map( (response) => response as Vehiculo[] )
    );
  }
}
