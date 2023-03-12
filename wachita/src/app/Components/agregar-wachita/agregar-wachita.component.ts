import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SerWachitaService } from 'src/app/Servicios/ser-wachita.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { InWachita } from 'src/app/Interfaz/in-wachita';



@Component({
  selector: 'app-agregar-wachita',
  templateUrl: './agregar-wachita.component.html',
  styleUrls: ['./agregar-wachita.component.css']
})
export class AgregarWachitaComponent  implements OnInit{

form: FormGroup

constructor(private fb: FormBuilder){

  this.form = this.fb.group({

    nombre: ['',Validators.required],
    raza: ['',Validators.required],
    padres:['',Validators.required],
    ubicacion: ['',Validators.required],
    dueno: ['',Validators.required],
    edada: ['',Validators.required],
    edadm: ['',Validators.required],
    marca:['',Validators.required],
    observacion: ['',Validators.required],
    color: ['',Validators.required],
    peso: ['',Validators.required],
    origen: ['',Validators.required],

  })
}

  ngOnInit(): void {
   
  }
  agregarwachita(){

    //const nombre = this.form.get('nombre')?.value

    //const nombre = this.form.value.nombre;
    //console.log(this.form)

    const awachita:InWachita = {

      nombre:this.form.value.nombre,
      raza:this.form.value.raza,
     padres:this.form.value.padres,
     ubicacion: this.form.value.ubicacion,
      dueno: this.form.value.dueno,
      edada: this.form.value.edada,
      edadm: this.form.value.edadm,
      marca:this.form.value.marca,
      observacion: this.form.value.observacion,
      color: this.form.value.color,
      peso: this.form.value.peso,
      origen: this.form.value.origen,

    }
console.log(awachita)

  }
}