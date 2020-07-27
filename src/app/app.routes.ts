import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';

export const ROUTES: Routes = [
    { path: 'inicio', component : InicioComponent },
    { path: 'vehiculos', component : VehiculosComponent },
    { path: '', pathMatch: 'full', redirectTo: 'inicio' },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];