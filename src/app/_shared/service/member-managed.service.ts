import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { MembersList, userState } from '../model/members';
import { CatchApiService } from '../service/catch-api.service'

@Injectable({
  providedIn: 'root'
})
export class MemberManagedService {

  isUser = new BehaviorSubject<userState>(new userState());
  constructor(private mainservice: CatchApiService, private router: Router) { }

  //登入使用者，並通知所有訂閱者
  login(group: MembersList): void {
    this.mainservice.getMember().subscribe((res) => {
      //通知所有使用者
      if (group) {
        const rule = res.findIndex((item: MembersList) => item.email === group.email && item.password === group.password) !== -1;
        if (rule) {
          this.isUser.next(new userState(group.email,false))
          this.router.navigate(['./page1']);
          return
        } else {
          this.isUser.next(new userState())
        }
      }
    });
  }

  /**
  * 登出使用者，並通知所有訂閱者
  */
  logout(): void {
    this.isUser.next(new userState())
    this.router.navigate(['./login']);
  }

}
