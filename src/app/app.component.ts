import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'loginTest';
  use: boolean = true;
  theme!: string;

  constructor() { }

  
  /**
  * 使用localStorageh存主題名稱
  * @param theme
  */
  saveTheme(theme: string): void {
    localStorage.setItem(`theme`, theme);
  }

  /**
   * 得到主題名稱設置body
   */
  getTheme(): void {
    let theme = localStorage.getItem(`theme`); // 获取主题名称
    if (!theme) {
      theme = `dark`; // 本地存储中没有theme的话 使用dark主题
    }
    const body = document.getElementsByTagName('body')[0];
    body.setAttribute('data-theme-style', theme); // 设置data-theme-style 属性
    this.theme = theme; // 用于界面显示
  }
  /**
   * 点击按钮 触发改变主题的方法
   */
  changeTheme(): void {
    const body = document.getElementsByTagName('body')[0];
    if (body.getAttribute(`data-theme-style`) === 'dark') {
      this.saveTheme(`light`); // 保存
      this.getTheme(); // 更新获取
    } else {
      this.saveTheme(`dark`); // 保存
      this.getTheme(); // 更新获取
    }
  }
}
