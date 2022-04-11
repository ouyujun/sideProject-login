import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MemberManagedService } from 'src/app/_shared/service/member-managed.service';
import { Router } from '@angular/router';
import { MembersList } from '../../_shared/model/members'

import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  @ViewChild('myForm', { static: false }) myform!: NgForm;

  loginModel = new MembersList();
  isLoggedIn!: boolean;
  constructor(private MemberService: MemberManagedService) {
    MemberService.isLoggedIn().subscribe((res: boolean) => {
      this.isLoggedIn=res;
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

