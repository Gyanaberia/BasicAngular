import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Formdata } from './formdata';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private url="https://cs251-outlab-6.herokuapp.com/initial_values/"
  constructor(private http:HttpClient) { }
  getForm():Observable<Formdata>{
    return this.http.get<Formdata>(this.url);//returns an observable in the form of an Formdata.Formdata is a general interface in which the get data should be received
  }
  submitForm(){}
}
