import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MemberManagedService } from 'src/app/_shared/service/member-managed.service';
import { MembersList, userState } from '../../_shared/model/members'

import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {
  @ViewChild('myForm', { static: false }) myform!: NgForm;

  loginModel = new MembersList();
  isUserInfo = new userState();

  subscription!: Subscription;

  constructor(private MemberService: MemberManagedService) {
    this.subscription = this.MemberService.isUser.subscribe((res: userState) => {
      this.isUserInfo.userMail = res.userMail;
      this.isUserInfo.userState = res.userState;
    })


  }
  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onLogin(): void {
    if (!this.myform.valid) {
      this.myform.form.markAllAsTouched();
      return
    } else {
      this.MemberService.login(this.loginModel);
    }
  }
}