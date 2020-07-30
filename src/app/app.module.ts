import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { VehiculoService } from "./components/vehiculos/service/vehiculo.service";
//Se agrega import para poder conectar al fron con el back
import { HttpClientModule } from "@angular/common/http";

// Importar rutas
import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    VehiculosComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, {useHash: true} )
  ],
  providers: [VehiculoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
