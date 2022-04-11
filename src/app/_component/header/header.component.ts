import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MemberManagedService } from 'src/app/_shared/service/member-managed.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isUserMail: string | null=null;
  constructor(private managedService: MemberManagedService) {
    this.managedService.isUserMail.subscribe((res: string | null) => {
      this.isUserMail = res;
    })
  }
  status: string = !this.isUserMail ? 'on' : 'off';
  ngOnInit(): void { }
  onLogOut() {
    this.managedService.logout();
  }

}
