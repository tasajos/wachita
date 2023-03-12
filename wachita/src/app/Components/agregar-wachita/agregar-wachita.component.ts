import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SerWachitaService } from 'src/app/Servicios/ser-wachita.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';



@Component({
  selector: 'app-agregar-wachita',
  templateUrl: './agregar-wachita.component.html',
  styleUrls: ['./agregar-wachita.component.css']
})
export class AgregarWachitaComponent  implements OnInit{


constructor(){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}