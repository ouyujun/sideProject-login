/**
 * 定義欄位所需資訊-內容
 * @param recMediListCloun
 */
export class listCloun {
  public recMediField: string[];
  [key: string]: string[] | number | undefined;
  constructor() {
    this.recMediField = [
      'OrgAccount', 'No', 'StartDate',
      'EndDate', 'MedicineName', 'Dosage1',
      'Dosage2', 'Type', 'Instructions',
      'Mill', 'code1', 'code2', 'Time1',
      'Time2', 'Time3', 'Time4', 'Status','動作'
    ]
  }
}

/**
 * 定義取得列表需傳入參數
 * @param inputParameter
 */
export class inputParameter {
  public Token: string;
  public OrgAccount: string | null;
  public LoginAccount: string | null;
  public Data: any | null;
  public PageIndex: number|null;
  public PageCount: number|null;
  constructor() {
    //再利用constructor特性去賦予值(沒有賦予值的話是無法new成一個物件，會報錯～)
    this.Token = '2zgDRxcfsSegz16ITtH9cc0iJxxNEHxBJlajY5hIakY=';
    this.OrgAccount = 'S101';
    this.LoginAccount = 'U01';
    this.Data = { 'NoList': [{ 'Values': '107025' }] };
    this.PageIndex = 1;
    this.PageCount = 10;
  }
}

//取得列表...
/**
 * 定義取得API固定回傳欄位
 * @param apiFeedback
 */
export class apiFeedback {
  public code: number | null;
  public Data: any;
  public Msg: string | null;
  public success: boolean | null;
  //與interface一樣先定義類型
  constructor() {
    //再利用constructor特性去賦予值(沒有賦予值的話是無法new成一個物件，會報錯～)
    this.code = null;
    this.Data = null;
    this.Msg = null;
    this.success = null;
  }
}
/**
 * 定義取得列表內容（DataResult）
 * @param recMediDataResult
 */
export class recMediDataResult {
  public code1: number | string | null;
  public code2: number | string | null;
  public Dosage1: number | string | null;
  public Dosage2: number | string | null;
  public EndDate: string | null;
  public Instructions: string | null;
  public MedicineName: string | null;
  public Mill: number | string | null;
  public No: string | null;
  public OrgAccount: string | null;
  public Seq: string | null;
  public StartDate: string | null;
  public Status: number | string | null;
  public Time1: string | null;
  public Time2: string | null;
  public Time3: string | null;
  public Time4: string | null;
  public Type: string | null;
  public actionType: string | null;
  //與interface一樣先定義類型
  constructor() {
    //再利用constructor特性去賦予值(沒有賦予值的話是無法new成一個物件，會報錯～)
    this.code1 = null;
    this.code2 = null;
    this.Dosage1 = null;
    this.Dosage2 = null;
    this.EndDate = null;
    this.Instructions = null;
    this.MedicineName = null;
    this.Mill = null;
    this.No = null;
    this.OrgAccount = null;
    this.Seq = null;
    this.StartDate = null;
    this.Status = null;
    this.Time1 = null;
    this.Time2 = null;
    this.Time3 = null;
    this.Time4 = null;
    this.Type = null;
    this.actionType = null;
  }
}
