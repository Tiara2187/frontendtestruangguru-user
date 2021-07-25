import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { environment } from '../../../environments/environment'
import { User } from '../models/user'

const USER_URL = environment.apiUrl + '/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers = new HttpHeaders().set('Content-Type', 'application/json')

  constructor(private http: HttpClient, private router: Router) { }

  signUp(user : User) {
    return this.http.post(USER_URL + '/signup', user).subscribe((res: any) => {
      console.log(res);

      Swal.fire('Welcome','You can login now','success')
      this.router.navigate(['']);
    },
    error => {
      Swal.fire('Sorry',error.error.message,'error')
    })
  }

  get isLogin() {
    let token = localStorage.getItem('token');
    if(token != null) {
      return true
    }
    else return false
  }

  getToken() {
    return localStorage.getItem('token');
  }

  handleError(error: HttpErrorResponse) {
    let message = '';
    if (error.error instanceof ErrorEvent) message = error.error.message;
    else message = `Error code : ${error.status} \n Message Error : ${error.message}`
    return throwError(message);
  }

 
}
