import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarWachitaComponent } from './Components/agregar-wachita/agregar-wachita.component';
import { VerWachitaComponent } from './Components/ver-wachita/ver-wachita.component';
import { ListadoWachitaComponent } from './Components/listado-wachita/listado-wachita.component';
import { PrincipalComponent } from './Components/principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarWachitaComponent,
    VerWachitaComponent,
    ListadoWachitaComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
