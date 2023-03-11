import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarWachitaComponent } from './Components/agregar-wachita/agregar-wachita.component';
import { ListadoWachitaComponent } from './Components/listado-wachita/listado-wachita.component';
import { PrincipalComponent } from './Components/principal/principal.component';
import { VerWachitaComponent } from './Components/ver-wachita/ver-wachita.component';

const routes: Routes = [
  //{path: '', redirectTo:'principal',pathMatch:'full'},
  {path: '', redirectTo:'principal',pathMatch:'full'},
  {path: 'principal', component:PrincipalComponent},
  {path: 'agregarw', component:AgregarWachitaComponent},
  {path: 'listarw', component:ListadoWachitaComponent},
  {path: 'verwachita/:id', component:VerWachitaComponent},
  //{path: '**', redirectTo: 'principal', pathMatch:'full'},
  {path: '**', redirectTo: 'principal', pathMatch:'full'},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
