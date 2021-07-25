import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { UserService } from '../service/user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


  export class AuthInterceptorService implements HttpInterceptor {

    constructor(private userService : UserService) {}
      
      intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
          const token = this.userService.getToken()
           req = req.clone({
              setHeaders:{
                  Authorization: 'Bearer ' + token
              }
          });
          return next.handle(req)
        }
      
}
