import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//componentes
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarWachitaComponent } from './Components/agregar-wachita/agregar-wachita.component';
import { VerWachitaComponent } from './Components/ver-wachita/ver-wachita.component';
import { ListadoWachitaComponent } from './Components/listado-wachita/listado-wachita.component';
import { PrincipalComponent } from './Components/principal/principal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
