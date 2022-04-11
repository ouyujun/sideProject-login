import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[newMailRulesName]',
  providers: [{ provide: NG_VALIDATORS, useExisting: newMailRules, multi: true }]
})

export class newMailRules {

  validate(control: AbstractControl): ValidationErrors | null {
    const emailRule = /^[A-Z]\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
    // const emailRule =/^([A-Z]+)(\w|\.)*@(\w*\.*\w*$)/;

    const isEmail = control.value?.search(emailRule) !== -1;
    return !isEmail ? { newMailRulesName: { value: control.value } } : null;
  }
}
