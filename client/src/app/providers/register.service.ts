import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of} from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from './../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
 users: User[] = [];

 private usersEndpoint: string = 'http://localhost:3000/users/register';
 private httpOptions = {
   headers: new HttpHeaders({
     'Content-Type':  'application/json'
   }),

   withCredentials:true
 };

 constructor(private http: HttpClient) { }
 
  addUser(username:string, email:string, password:string){
    return this.http.post(this.usersEndpoint, {username : username, email : email, password : password}, this.httpOptions)
    .pipe(map(res => <any[]>res));
  }

  getUsers() : Observable<any> {
    return this.http.get(this.usersEndpoint, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }


}
