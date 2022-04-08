import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MemberManagedService } from 'src/app/_shared/service/member-managed.service';
import { Router } from '@angular/router';
import { MembersList } from '../../_shared/model/members'

import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  @ViewChild('myForm',{static: false}) myform!: NgForm;

  private isLoginSub$!: Subscription; 
  loginModel = new MembersList();
  isLogin:boolean=true;

  constructor(private router: Router, private MemberService: MemberManagedService) { }

  ngOnInit(): void { 
      this.isLoginSub$=this.MemberService.isLogin$.subscribe((res: boolean) => {
        if (res) { //service
          localStorage.setItem('suecess', this.loginModel.email);
          this.myform.reset();
          this.router.navigate(['./page1']);
          this.isLogin=res;
          return
        } else{
          this.isLogin=false;
        }
      })
  }
  ngOnDestroy() { //取消訂閱
    this.isLoginSub$.unsubscribe();
  }
  onLogin(): void {
    if (!this.myform.valid) {
      this.myform.form.markAllAsTouched();
      return
    } else {
      this.MemberService.doCompareWithMember(this.loginModel);
    }
  }
}

