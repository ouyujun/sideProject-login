import { Component, OnInit } from '@angular/core';
import { MemberManagedService } from 'src/app/_shared/service/member-managed.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private managedService: MemberManagedService) { }
  name: string = "歐俞均";
  status: string = "online"
  ngOnInit(): void {
    // this.managedService.isLoginSubject.subscribe((res: boolean) => {
    //   if (res) { this.status = "online"  } else { this.status = "offline" }
    // })
  }

}
