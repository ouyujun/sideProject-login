import { Component, OnInit } from '@angular/core';
import { CatchApiService } from 'src/app/_shared/catch-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private catchApiService:CatchApiService) { }

  ngOnInit(): void {
  }
  myAccount:string="";
  myPassword:string="";
  onLogin(){
    this.catchApiService.getMember().subscribe((res)=>{
      console.log(res);
    })
  }
}
