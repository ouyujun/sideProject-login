import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MemberManagedService } from 'src/app/_shared/service/member-managed.service';
import { MembersList } from '../../_shared/model/members'

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  @ViewChild('myForm', { static: false }) myform!: NgForm;

  loginModel = new MembersList();
  isUserMail!: string | null;
  isUserErr: boolean | null = null;
  constructor(private MemberService: MemberManagedService) {
    MemberService.isUserMail.subscribe((res: string | null) => {
      this.isUserMail = res;
    });
    MemberService.isUserErr.subscribe((res: boolean) => {
      this.isUserErr = res;
    });

  }
  ngOnInit(): void { }
  onLogin(): void {
    if (!this.myform.valid) {
      this.myform.form.markAllAsTouched();
      return
    } else {
      this.MemberService.login(this.loginModel);
    }
  }
}