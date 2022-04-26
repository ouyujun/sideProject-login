import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { userState } from 'src/app/_shared/model/members';
import { MemberManagedService } from 'src/app/_shared/service/member-managed.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, OnDestroy {
  isUserMail!: string | null;
  subscription!: Subscription;

  constructor(private MemberService: MemberManagedService) {}
  ngOnInit(): void {
    this.subscription = this.MemberService.isUser.subscribe((res: userState) => {
      this.isUserMail = res.userMail;
    })
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
