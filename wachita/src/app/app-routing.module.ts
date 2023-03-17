import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarWachitaComponent } from './Components/agregar-wachita/agregar-wachita.component';
import { FacturacionComponent } from './Components/facturacion/facturacion.component';
import { ListadoWachitaComponent } from './Components/listado-wachita/listado-wachita.component';
import { MaternidadComponent } from './Components/maternidad/maternidad.component';
import { PrincipalComponent } from './Components/principal/principal.component';
import { SeguimientonComponent } from './Components/seguimienton/seguimienton.component';
import { SeguimientovComponent } from './Components/seguimientov/seguimientov.component';
import { VerWachitaComponent } from './Components/ver-wachita/ver-wachita.component';

const routes: Routes = [
  //{path: '', redirectTo:'principal',pathMatch:'full'},
  {path: '', redirectTo:'principal',pathMatch:'full'},
  {path: 'principal', component:PrincipalComponent},
  {path: 'agregarw', component:AgregarWachitaComponent},
  {path: 'listarw', component:ListadoWachitaComponent},
  {path: 'verwachita/:id', component:VerWachitaComponent},
  {path: 'seguimienton', component:SeguimientonComponent},
  {path: 'seguimientov', component:SeguimientovComponent},
  {path: 'maternidad', component:MaternidadComponent},
  {path: 'facturacion', component:FacturacionComponent},
  //{path: '**', redirectTo: 'principal', pathMatch:'full'},
  {path: '**', redirectTo: 'principal', pathMatch:'full'},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
