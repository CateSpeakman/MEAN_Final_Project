import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // // Hard-coded for demo purposes
   USER_NAME: string = 'Admin';
   PASSWORD: string = 'password';

   private userId: number = 0;
   private isAuthenticated : boolean = false;
   private isAdmin : boolean = false;

  private usersEndpoint: string = 'http://localhost:3000/users/login';
	private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    }),
    
    withCredentials:true

  };

  constructor(private http: HttpClient) { }

  login(userName: string, password: string) : Observable<any> {
    return this.http.post(this.usersEndpoint, {username : userName, password : password}, this.httpOptions)
      .pipe(map(res => <any[]>res));
    }

    setUserId(id: number): void {
      this.userId = id;
    }
  
    getUserId(): number {
      return this.userId
    }

}