import { Component, OnInit } from '@angular/core';
import { MemberManagedService } from 'src/app/_shared/service/member-managed.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  constructor(private mainService: MemberManagedService) {
  }

  ngOnInit(): void {
  }

}
