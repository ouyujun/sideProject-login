/** 按鈕最大數量 */
export const PAGER_MAX_BTN = 5;

/** 分頁最大頁數 */
export const PAGER_MAX_ROW = 10;

/** 分頁介面格式 */
export interface Pager {
  /** 一頁最大筆數 */
  max: number;

  /** 當前頁數顯示 */
  now: number;
}

/** 分頁回傳格式 */
export class PagerData {
  constructor(
    /** 資料筆數 */
    public DataCount: number = 10,
    /** 當前頁數 */
    public PageIndex: number=1,
    /** 資料內容 */
    public DataResult: any[]=[],
  ) {

  }
}

export class PagerFind {
  /**
   * 搜尋
   * @param PageIndex 當前頁數
   * @param PageCount 每頁筆數
   */
  constructor(public PageIndex = 1, public PageCount = PAGER_MAX_ROW) { }
}
