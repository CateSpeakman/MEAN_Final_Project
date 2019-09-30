import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class EditService {
  
  userName: string = '';
  email: string = '';
  userid: number;
  user: [];
  sub: any;

 private usersEndpoint: string = 'http://localhost:3000/users/update/:id';
 private httpOptions = {
   headers: new HttpHeaders({
     'Content-Type':  'application/json'
   }),

   withCredentials:true
 };


  constructor(private http: HttpClient) { }

  getUser(userid: number) : Observable<any> {
    return this.http.get(`${this.usersEndpoint}${userid}${this.userName} ${this.email}`, this.httpOptions)
    .pipe(map(res=> <any[]>res));
  }

  editUser(userid: number) : Observable<any>{
    return this.http.put(`${this.usersEndpoint}${userid} ${this.email}`, this.httpOptions)
    .pipe(map(res => <any[]>res));
  }

  deleteUser(userid: number) : Observable<any> {
    return this.http.delete(`${this.usersEndpoint}${userid}`, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }
}
