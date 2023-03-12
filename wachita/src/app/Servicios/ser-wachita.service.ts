import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SerWachitaService {

  private Myappurl: string = environment.endpoint;
  private Myapiurl: string = 'api/Wachita/';

  constructor(private http: HttpClient) { }

    getwachita():Observable<any>{
return this.http.get(`${this.Myappurl}${this.Myapiurl}`);

    }
  
}
