import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MemberManagedService } from '../_shared/service/member-managed.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isUserMail!: string | null;
  constructor(private router: Router, private memberService: MemberManagedService) {
    memberService.isUserMail.subscribe((res: string | null) => {
      this.isUserMail = res;
    });
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.isUserMail) {
      this.router.navigate(['/login']);
    }
    return true;
  }

}
