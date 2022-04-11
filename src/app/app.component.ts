import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'loginTest';
  use: boolean = true;

  constructor() { }

  /**
   * 点击按钮 触发改变主题的方法
   */
  getTheme(): void {
    this.use = !this.use;
  }


}
