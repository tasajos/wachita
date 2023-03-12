import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    private apiUrl: string = 'https://localhost:7054/api/Wachita/'; // reemplaza la URL con la URL de tu propio servidor


  constructor(private http: HttpClient) { }

 
  getCount(): Observable<number> {
    return this.http.get<number>(this.apiUrl + 'count');
  }
}