import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InWachita } from '../Interfaz/in-wachita';

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
addwachita (wachita: InWachita): Observable<InWachita> {

  return  this.http.post<InWachita>(`${this.Myappurl}${this.Myapiurl}`,wachita);



}
deleteWachita(id:number): Observable<void>{
  return this.http.delete<void>(`${this.Myappurl}${this.Myapiurl}${id}`);
 }

 getidwachita(id:number): Observable<InWachita>{

  return this.http.get<InWachita>(`${this.Myappurl}${this.Myapiurl}${id}`)

}
}
