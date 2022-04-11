import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MemberManagedService } from 'src/app/_shared/service/member-managed.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  isUserMail!: string | null;
  constructor(private mainService: MemberManagedService) {
    this.mainService.isUserMail.subscribe((res: string | null) => {
      this.isUserMail = res;
    });
  }

  ngOnInit(): void {
  }

}
