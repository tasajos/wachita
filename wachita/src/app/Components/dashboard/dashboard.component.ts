import { Component, OnInit } from '@angular/core';
//import { DataService } from '../../Servicios/data.service';
import { SerWachitaService } from '../../Servicios/ser-wachita.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  vacasCount: number = 0;
 // maternidadCount: number=0;
  //maternidadCount: number 
  maternidadCount: {vacas: number, maternidad: number} = {vacas: 0, maternidad: 0};
  

  constructor(private serWachitaService: SerWachitaService) { }

  ngOnInit(): void {
    this.serWachitaService.getCount().subscribe(data=>{
      this.vacasCount = data;
    });

 this.serWachitaService.getCountm("Maternidad").subscribe(data=>{
  console.log(data); 
      this.maternidadCount = data;
    });
  }
}