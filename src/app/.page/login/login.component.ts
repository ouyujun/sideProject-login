import { Component, OnInit, Input } from '@angular/core';
import { CatchApiService } from 'src/app/_shared/service/catch-api.service';
import { Router } from '@angular/router';
import { MembersList } from '../../_shared/model/members'

import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = true;
  password = true;
  formGroup: FormGroup | undefined;//定義表單控制

  
  constructor(private catchApiService: CatchApiService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    // 表單驗證
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email,]], //required-->此欄位必須,email-->預設mail格式
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10,),]], //required-->此欄位必須,minLength-->最少字數
    });
  }

  getErrorMessage(key: string): string {
    const formControl = this.formGroup?.get(key);
    let errorMessage: string;
    if (!formControl || !formControl.errors || formControl.pristine) {
      errorMessage = '';
    } else if (formControl.errors['email']) {
      errorMessage = '請使用abc@mail.com格式';
    } else if (formControl.errors['required']) {
      errorMessage = '此欄位必填';
    } else if (formControl.errors['minlength']) {
      errorMessage = '至少需兩個字以上';
    } else if (formControl.errors['maxlength']) {
      errorMessage = '至多只能輸入十個字';
    }
    return errorMessage!;
  }


  onLogin(): void {
    this.catchApiService.getMember().subscribe((res:MembersList[]) => {
      let memberInfo=new MembersList({'email':this.formGroup?.value['email'],'password':this.formGroup?.value['password']})
      function isCherries(fruit:MembersList) {
        return fruit['email'] === memberInfo['email'] && fruit['password']===memberInfo['password'];
      }
      if (res.find(isCherries)) {
        localStorage.setItem('suecess',memberInfo['email'] )
        this.router.navigate(['/']);

      }
    })
    // do submit...
  }
}
// export const validator: ValidatorFn = (
//   control: AbstractControl
// ): ValidationErrors | null => {
//   const { name, phone, favorites } = control.value;
//   // 手機號碼正規化
//   const regPhone = RegExp(/^09[0-9]{8}$/);
//   return !phone ? null : regPhone.test(phone) ? null : { phone: true };
// };
