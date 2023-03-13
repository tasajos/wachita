import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl: string = 'https://localhost:7054/api/Wachita/';

  constructor(private http: HttpClient) { }

  getCounts(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'counts');
  }

}