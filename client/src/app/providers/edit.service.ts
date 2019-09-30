import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { LoginService } from './../providers/login.service';

@Injectable({
  providedIn: 'root'
})

export class EditService {
  
  userName: string = '';
  email: string = '';
  userid: number;
  user: [];
  sub: any;

 private usersEndpoint: string = 'http://localhost:3000/users/';
 private httpOptions = {
   headers: new HttpHeaders({
     'Content-Type':  'application/json'
   }),

   withCredentials:true
 };

  constructor(private http: HttpClient,
    private loginService: LoginService,) { }

  getUser(userid: number) : Observable<any> {
    return this.http.get(`${this.usersEndpoint}update/${userid}`, this.httpOptions)
    .pipe(map(res=> <any[]>res));
  }

  editUser(email: string) : Observable<any>{
    return this.http.put(`${this.usersEndpoint}update/`,{id:this.loginService.getUserId(), userName:this.userName, email:email}, this.httpOptions)
    .pipe(map(res => <any[]>res));
  }

  deleteUser(userid: number) : Observable<any> {
    return this.http.delete(`${this.usersEndpoint}${this.loginService.getUserId()}`, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }
}
