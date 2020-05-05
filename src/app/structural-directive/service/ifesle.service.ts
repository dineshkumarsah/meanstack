import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { IfElse } from '../modal/ifelse.modal';


@Injectable({
  providedIn: 'root'
})
export class IfesleService {
  url="http://localhost:3000/posts";
   headerOption ={
    headers:new HttpHeaders({'content-type':'application/json'})
    };
  constructor(private http: HttpClient) {}

  getPosts():Observable<any>{
    return this.http.get(this.url);
  }
  
  deleteIfElse(id:number):Observable<IfElse>{
    return this.http.delete<IfElse>(this.url+'/'+id,this.headerOption)
  }
}
