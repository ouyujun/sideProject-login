import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { MembersList } from '../model/members';
import { CatchApiService } from '../service/catch-api.service'

@Injectable({
  providedIn: 'root'
})
export class MemberManagedService {

  constructor(private mainservice: CatchApiService, private router: Router) { }
  isUserMail = new BehaviorSubject<string | null>(null);
  isUserErr = new BehaviorSubject<boolean>(false);

  /**
  *  登入使用者，並通知所有訂閱者
  */
  login(group: MembersList): void {
    this.mainservice.getMember().subscribe((res) => {
      //通知所有使用者
      if (group) {
        const rule = res.findIndex((item: MembersList) => item.email === group.email && item.password === group.password) !== -1;
        if (rule) {
          this.isUserMail.next(group.email);
          this.isUserErr.next(false);
          console.log(this.isUserMail.getValue())
          this.router.navigate(['./page1']);
          return
        } else {
          this.isUserMail.next(null);
          this.isUserErr.next(true);
        }
      }
    });
  }

  /**
  * 登出使用者，並通知所有訂閱者
  */
  logout(): void {
    this.isUserMail.next(null);
    this.isUserErr.next(false);
    this.router.navigate(['./login']);
  }

}
