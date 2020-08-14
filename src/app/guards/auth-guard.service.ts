import { Injectable } from '@angular/core';
import { TokenService } from '../service/token.service';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  realRol: string;
  constructor(private router: Router, private tokenService: TokenService) {}
  // passes only if the required role matches the current one
  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const expectedRoles: string[] = route.data.expectedRole;
    const roles = this.tokenService.getAuthorities();
    this.realRol = 'user';

    roles.forEach((rol) => {
      if (rol === 'ROL_ADMIN') {
        this.realRol = 'admin';
      }
    });

    if (
      expectedRoles.indexOf(this.realRol) === -1 ||
      !this.tokenService.getToken()
    ) {
      alert('usted no tiene permiso para ir a esa url');
      this.router.navigateByUrl('home');
      return false;
    } else {
      return true;
    }

  }
}
