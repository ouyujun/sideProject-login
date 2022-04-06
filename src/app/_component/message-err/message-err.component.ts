import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-message-err',
  templateUrl: './message-err.component.html',
  styleUrls: ['./message-err.component.scss']
})
export class MessageErrComponent implements OnInit {
  @Input()
  element!:any;
  constructor() { }

  ngOnInit(): void {
  }

}
