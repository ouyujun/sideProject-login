import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { userState } from '../_shared/model/members';
import { MemberManagedService } from '../_shared/service/member-managed.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private memberService: MemberManagedService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //'AuthGuard#canActivate 被觸發了, 你沒有授權！將跳轉回前台頁面'
    this.memberService.isUser.subscribe((res: userState) => {
      if (!res.userMail) {
        this.router.navigate(['/login']);
      }
    });
    return true;
  }

}
