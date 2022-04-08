import { Component, Input, OnInit } from '@angular/core';
import { CatchApiService } from '../../_shared/service/catch-api.service'
import { MembersList } from 'src/app/_shared/model/members';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-message-err',
  templateUrl: './message-err.component.html',
  styleUrls: ['./message-err.component.scss']
})
export class MessageErrComponent implements OnInit {
  @Input()
  element!: any;
  constructor(private catchApiService: CatchApiService, private router: Router) { }

  ngOnInit(): void { }
}
