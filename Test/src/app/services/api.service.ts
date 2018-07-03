import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/User';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators/catchError';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  post(url:string, body: any) : Observable<any>{
    return  this.http.post(url, body, this.setCASHeader()).pipe(catchError(this.formatErrors));
  }

  setPostHeader(){
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json; charset=UTF-8'
      })
    };
  }  

  private formatErrors(error: any) {
    return new ErrorObservable(error.error);
  }

  setCASHeader(){
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        'responseType': 'text' 
      })
    };
  }
}
