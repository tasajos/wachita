import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl: string = 'https://localhost:7054/'; // aquí iría la URL de la API

  constructor(private http: HttpClient) { }

  getCount(): Observable<number> { // definimos el tipo de retorno del método
    return this.http.get<number>(`${this.apiUrl}/count`);
  }

}