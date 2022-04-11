import { Component, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-message-err',
  templateUrl: './message-err.component.html',
  styleUrls: ['./message-err.component.scss']
})
export class MessageErrComponent implements OnInit {
  @Input()
  element!: NgModel;
  constructor() { }

  ngOnInit(): void { }
}
