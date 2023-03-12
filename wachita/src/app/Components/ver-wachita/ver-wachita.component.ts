import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InWachita } from 'src/app/Interfaz/in-wachita';
import {SerWachitaService} from 'src/app/Servicios/ser-wachita.service';


@Component({
  selector: 'app-ver-wachita',
  templateUrl: './ver-wachita.component.html',
  styleUrls: ['./ver-wachita.component.css']
})
export class VerWachitaComponent  implements OnInit{

  id:number;
  idWachita!: InWachita;
 
  
    constructor (private _verwachita:SerWachitaService,
      private aRoute: ActivatedRoute) {
  
        this.id = +this.aRoute.snapshot.paramMap.get('id')!;
        
       }
  
  
    ngOnInit(): void {
      this.obtenerWachita();
    }
  obtenerWachita(){
  //this._verwachita.getwachita(this.id).subscribe(data => this.idWachita =data);
  this._verwachita.getidwachita(this.id).subscribe(data =>this.idWachita =data);
  }
  
  }
