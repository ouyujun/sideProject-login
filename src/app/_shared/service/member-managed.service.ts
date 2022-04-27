import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { MembersList, userState } from '../model/members';
import { CatchApiService } from '../service/catch-api.service'

@Injectable({
  providedIn: 'root'
})
export class MemberManagedService implements OnDestroy {
  subscription!: Subscription;
  isUser = new BehaviorSubject<userState>(new userState());
  constructor(private mainservice: CatchApiService, private router: Router) {
    //將登入過帳密紀錄session重整便不會登出
    const strorageSelectedFilter = sessionStorage.getItem('user');
    if (strorageSelectedFilter) {
      const loginObj = JSON.parse(strorageSelectedFilter);
      this.isUser.next(loginObj)
    }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe(); //取得member.json訂閱
  }
  //登入使用者，並通知所有訂閱者
  login(group: MembersList): void {
    this.subscription = this.mainservice.getMember().subscribe((res: MembersList[]) => { //取得member.json
      const rule = res.findIndex((item: MembersList) => item.email === group.email && item.password === group.password) !== -1;
      if (rule) {
        this.isUser.next(new userState(group.email, false))//通知所有使用者
        sessionStorage.setItem('user', JSON.stringify(this.isUser.getValue()))
        this.router.navigate(['./page1']);
      }
    });
  }

  /**
  * 登出使用者，並通知所有訂閱者
  */
  logout(): void {
    this.isUser.next(new userState())
    sessionStorage.clear();
    this.router.navigate(['./login']);
  }

}
