import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { PagerData, PAGER_MAX_BTN, PAGER_MAX_ROW } from './pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit, OnChanges {
  // https://codepen.io/team/eggheadio/pen/wrJwBB?editors=1010
  // https://wellwind.idv.tw/blog/2020/10/16/mastering-rxjs-31-practicing-autocomplete-search-sort-pagination/
  /** 按鈕位置判斷暫存 */
  private preset = {
    mid: 0,
    left: 0,
    right: 0,
  };

  /** 頁碼資料 */
  @Input() val: PagerData | null = null;
  @Output() valChange = new EventEmitter<PagerData>();

  /** 搜尋函式 */
  @Output() update: EventEmitter<number> = new EventEmitter();

  /** 當前頁數 */
  now!: number;

  /** 最大筆數 */
  max!: number;

  /** 頁碼按鈕 */
  num!: number[];

  /** 最大頁數 */
  page!: number;

  /** 按鈕數量 */
  btn!: number;

  /** 下拉選單 */
  select!: number[];

  /** 呈現一頁幾筆 */
  show = PAGER_MAX_ROW;

  constructor() {

  }

  /** 頁碼變更顯示 */
  roll(): void {
    // 重置按鈕列表
    this.num = [];
    this.page = Math.ceil(this.max / PAGER_MAX_ROW);

    // 如果目前頁面數字小於按鈕數量中間值
    if (this.now <= this.preset.mid) {
      // 從 1 開始編號
      // 如果頁面小於按鈕數
      if (this.page < this.btn) {
        // 使用頁面數量迴圈
        for (let i = 1; i <= this.page; i++) {
          this.num.push(i);
        }
        // 頁面大於按鈕數
      } else {
        // 使用按鈕上限迴圈
        for (let l = 1; l <= this.btn; l++) {
          this.num.push(l);
        }
      }
    }
    // 如果目前頁面在最尾端或比中間值大時
    else if (this.now + this.preset.mid > this.page) {
      // 從最後開始編號
      for (let j = 1 - this.btn; j <= 0; j++) {
        this.num.push(this.page + j);
      }
    } else {
      // 如果當前頁面不是在最尾端或最前端
      // 從中間開始編號
      for (let k = 0 - this.preset.left; k <= this.preset.right; k++) {
        this.num.push(this.now + k);
      }
    }
  }

  /**
   * 按下切換頁面按鈕的功能
   * @param move 指定頁數
   * @param numbers 強制轉為數字
   */
  move(move: (number | string) | Event, numbers?: boolean): void {
    // 是否強制轉為數字 Event
    move = numbers ? Number(((move as Event).target as HTMLTextAreaElement).value) : move;

    // 深拷貝起始頁數
    const start = JSON.parse(JSON.stringify(this.now));

    // 先判斷是否為指定字串
    // 來決定 this.now 數值
    switch (move) {
      case 'next':
        this.now = this.now + 1;
        break;
      case 'prev':
        this.now = this.now - 1;
        break;
      case 'first':
        this.now = 0;
        break;
      case 'last':
        this.now = this.page;
        break;
      default:
        if (typeof move === 'number') {
          this.now = move;
        } else {
          this.now = 1;
        }
        break;
    }

    // 檢查是否為整數
    if (Number.isInteger(this.now)) {
      // 數值不超過最大值
      this.now = this.now >= this.page ? this.page : this.now;
      // 數值不小於 0
      this.now = this.now <= 0 ? 1 : this.now;
    } else {
      this.now = 1;
    }

    // 執行後頁數有變更
    if (start !== this.now) {
      // 回調函式
      this.update.emit(this.now);
      // 重新顯示
      // this.roll();
    }
  }

  /**
   * 頁碼計算
   * @param pager 分頁格式
   */
  run(pager: PagerData | null): void {
    if (!pager) {
      this.max = 0;
      this.page = 0;
      this.select = [];
      return;
    }

    // 當前頁碼
    this.now = pager.PageIndex || 1;

    // 總筆數
    this.max = pager.DataCount;

    // 計算最大頁數
    this.page = Math.ceil(this.max / PAGER_MAX_ROW);

    // 頁數選單
    this.select = Array(this.page)
      .fill(0)
      .map((x, i) => i + 1);

    // 計算按鈕數量：如果小於「最大頁數」，取「最大頁數」；如果大於等於「最大頁數」，則取「預設按鈕最大數量」
    this.btn = this.page < PAGER_MAX_BTN ? this.page : PAGER_MAX_BTN;

    // 定義中間按鈕序號
    this.preset.mid = Math.round(PAGER_MAX_BTN / 2);

    // 中間按鈕左邊的按鈕數量
    this.preset.left =
      PAGER_MAX_BTN % 2 ? PAGER_MAX_BTN - this.preset.mid : PAGER_MAX_BTN - this.preset.mid - 1;

    // 中間按鈕右邊的按鈕數量
    this.preset.right = PAGER_MAX_BTN - this.preset.mid;

    // 生成按鈕列表
    this.roll();
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.run(this.val);
  }
}
