import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {SerWachitaService} from 'src/app/Servicios/ser-wachita.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { InWachita } from 'src/app/Interfaz/in-wachita';

@Component({
  selector: 'app-seguimienton',
  templateUrl: './seguimienton.component.html',
  styleUrls: ['./seguimienton.component.css']
})
export class SeguimientonComponent implements OnInit,AfterViewInit{


  displayedColumns: string[] = ['nombre','raza','padres','ubicacion','dueno','edada','edadm','marca','observacion','color','peso','origen','acciones'];
  dataSource = new MatTableDataSource<InWachita>();
  loading:boolean =false;
  data: any[] = [];
  
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('table') table: any;

  constructor (private _wachitaservice:SerWachitaService,
    private _snackBar: MatSnackBar,) {}


  ngAfterViewInit(): void{
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Items Por Pagina'
    this.dataSource.sort = this.sort;
    

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }
  obtenerWachita(){

    this._wachitaservice.getwachita().subscribe(data =>
      {
        this.loading =false;
       this.dataSource.data = data;
      }, _error => {
        this.loading =false;
        alert("Error" )
      })
      
  }

  ngOnInit(): void {
   // this.obtenerWachita();
   this._wachitaservice.getwachita().subscribe((data: any) => {
    // Filtrar los registros que corresponden a maternidad
    const filteredData = data.filter((item: any) => item.observacion === 'Nacido');

    this.dataSource = new MatTableDataSource(filteredData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  });
  
  }
  eliminarPersonal(id:number){
    this.loading =true;
    this._wachitaservice.deleteWachita(id).subscribe(() =>{
this.mensajeExito();
this.loading=false;
this.obtenerWachita();
    })
    
    
  }
  mensajeExito(){
    this._snackBar.open(" Registro Eliminado",'',{
      duration:3000
  }
)};  
}


