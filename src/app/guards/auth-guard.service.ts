import { Injectable } from '@angular/core';
import { TokenService } from '../service/token.service';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  realRole: string;
  constructor(private router: Router, private tokenService: TokenService,private toastrService: ToastrService) {}
  // passes only if the required role matches the current one
  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const expectedRoles: string[] = route.data.expectedRole;
    const roles = this.tokenService.getAuthorities();
    this.realRole = 'user';

    roles.forEach((role) => {
      if (role === 'ROLE_ADMIN') {
        this.realRole = 'admin';
      }
    });

    if (
      expectedRoles.indexOf(this.realRole) === -1 ||
      !this.tokenService.getToken()
    ) {
      this.toastrService.error('usted no tiene permiso para ir a esa url');
      this.router.navigateByUrl('home');
      return false;
    } else {
      return true;
    }

  }
}
