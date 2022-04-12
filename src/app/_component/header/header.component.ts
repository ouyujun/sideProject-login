import { Component, Input, OnInit } from '@angular/core';
import { userState } from 'src/app/_shared/model/members';
import { MemberManagedService } from 'src/app/_shared/service/member-managed.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input('userMail') element!: string | null;
  constructor(private managedService: MemberManagedService) { }
  status: string = !this.element ? 'on' : 'off';
  ngOnInit(): void { }
  onLogOut() {
    this.managedService.logout();
  }

}
