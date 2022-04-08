import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MembersList } from '../model/members';
import { CatchApiService } from '../service/catch-api.service'

@Injectable({
  providedIn: 'root'
})
export class MemberManagedService {

  constructor(private mainservice: CatchApiService) { }
  isLogin$ = new Subject<boolean>();
  doCompareWithMember(group: MembersList) {
    this.mainservice.getMember().subscribe((res) => {
      this.isLogin$.next(res.findIndex((item: MembersList) => item.email === group.email && item.password === group.password) !== -1)
      // return res.includes(group);
    });
  }


}
