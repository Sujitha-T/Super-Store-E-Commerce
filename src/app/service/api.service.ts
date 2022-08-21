import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  dummyurl = environment.dummyurl;
  constructor(private http: HttpClient) { }

  httpGet(url: string): Observable<any>{
   return this.http.get(this.dummyurl+url);
  }

  httpPost(url: string, body: any): Observable<any>{
    return this.http.post(this.dummyurl+url, body);
   }

  httpDelete(url: string, body: any): Observable<any>{
    return this.http.delete(this.dummyurl+url, body);
   }

   httpPut(url: string, body: any): Observable<any>{
    return this.http.put(this.dummyurl+url, body);
   }
}
