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
   })
 };

 constructor(private http: HttpClient) { }
 
  addUser(userName:string, email:string, password:string){
    this.users.push(new User(userName, email, password));
    return this.users;
  }

  getUsers() : Observable<any> {
    return this.http.get(this.usersEndpoint, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }


}
