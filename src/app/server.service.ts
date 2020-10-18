import { Pipe,PipeTransform,Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Formdata } from './formdata';
import { Observable,throwError } from 'rxjs';
import {catchError,retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  gurl="https://cs251-outlab-6.herokuapp.com/initial_values/"
  purl=" https://cs251-outlab-6.herokuapp.com/add_new_feedback/"
  constructor(private http:HttpClient) { }
  getForm():Observable<Formdata>{
    return this.http.get<Formdata>(this.gurl);//returns an observable in the form of an Formdata.Formdata is a general interface in which the get data should be received
  }
  submitForm(userData:Formdata):Observable<Formdata>{
    return this.http.post<Formdata>(this.purl,userData).pipe(catchError(this.errorhandler));
  }
  errorhandler(error:HttpErrorResponse){
    return throwError(error);
  }
}
