import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Servicios/data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  count: number = 0; // inicializamos la propiedad count en cero
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getCount().subscribe(count => this.count = count); // obtenemos la cantidad de registros
  }

}
