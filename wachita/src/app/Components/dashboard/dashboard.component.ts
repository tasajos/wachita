import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Servicios/data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  template: '<p>Hay {{ count }} registros en la base de datos</p>',
})
export class DashboardComponent implements OnInit {
  count: number = 0;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getCount().subscribe(count => this.count = count);
  }
}
