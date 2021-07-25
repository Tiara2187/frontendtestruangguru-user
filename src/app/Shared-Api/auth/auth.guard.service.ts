import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private userService : UserService, private router : Router) { }

  canActivate(
    next : ActivatedRouteSnapshot,
    state : RouterStateSnapshot
) : Observable <boolean> |Promise<boolean> |boolean{
    if(this.userService.isLogin !== true ) {
        this.router.navigate(['/dashboard'])
        Swal.fire('Sorry','You cant access, please Login First','error')
    }
    return true
}
}
