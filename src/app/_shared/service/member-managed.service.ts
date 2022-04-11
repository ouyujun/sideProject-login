import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { MembersList } from '../model/members';
import { CatchApiService } from '../service/catch-api.service'

@Injectable({
  providedIn: 'root'
})
export class MemberManagedService {

  constructor(private mainservice: CatchApiService, private router: Router) { }

  isLoginSubject = new BehaviorSubject<boolean>(true);
  isLogin = new BehaviorSubject<boolean>(false);

  /**
   * 如果有取得token，表示使用者有登入系統
   * @returns {boolean}
   */
  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  /**
  *  登入使用者，並通知所有訂閱者
  */
  login(group: MembersList): void {
    this.mainservice.getMember().subscribe((res) => {
      localStorage.setItem('memberInfo', group.email);
      //通知所有使用者
      if (res.findIndex((item: MembersList) => item.email === group.email && item.password === group.password) !== -1) {
        localStorage.setItem('token', 'JWT');
        this.isLoginSubject.next(this.hasToken());
        this.router.navigate(['./page1']);
      } else {
        this.isLoginSubject.next(this.hasToken())
      }
    });
  }

  /**
  * 登出使用者，並通知所有訂閱者
  */
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('memberInfo');
    this.isLoginSubject.next(this.hasToken());
  }

  /**
  *
  * @returns {Observable<T>}
  */
  isLoggedIn(): Observable<boolean> {
    console.log(this.isLoginSubject)
    return this.isLoginSubject.asObservable();
  }

}
