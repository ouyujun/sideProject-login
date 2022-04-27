/**
 * 定義欄位所需資訊-內容
 * @param recMediListCloun
 */
export class listCloun {
  [key: string]: string[] | number | undefined
  constructor(public recMediField: string[] = [
    'OrgAccount', 'No', 'StartDate',
    'EndDate', 'MedicineName', 'Dosage1',
    'Dosage2', 'Type', 'Instructions',
    'Mill', 'code1', 'code2', 'Time1',
    'Time2', 'Time3', 'Time4', 'Status', '動作'
  ]) { }
}

/**
 * 定義取得列表需傳入參數
 * @param inputParameter
 */
export class inputParameter {
  constructor(
    public OrgAccount: string | null = 'S101',
    public LoginAccount: string | null = 'U01',
    public Data: any | null = { 'NoList': [{ 'Values': '107025' }] },
    public PageIndex: number | null = 1,
    public PageCount: number | null = 10,
    //再利用constructor特性去賦予值(沒有賦予值的話是無法new成一個物件，會報錯～)
  ) { }
}

//取得列表...
/**
 * 定義取得API固定回傳欄位
 * @param apiFeedback
 */
export class apiFeedback {
  constructor(
    public code: number | null = null,
    public Data: any = null,
    public Msg: string | null = null,
    public success: boolean | null = null,
    //與interface一樣先定義類型
    //再利用constructor特性去賦予值(沒有賦予值的話是無法new成一個物件，會報錯～)
  ) { }
}
//取得列表...
/**
 * 取得列表後Data裏
 * @param recMediData總比數資料列
 */
export class recMediData {
  constructor(
    public DataCount: number = 0,
    public DataResult: recMediDataResult[] = []
  ) { }
}
/**
 * 定義取得列表內容（DataResult）
 * @param recMediDataResult
 */
export class recMediDataResult {
  constructor(
    public code1: number | string | null = null,
    public code2: number | string | null = null,
    public Dosage1: number | string | null = null,
    public Dosage2: number | string | null = null,
    public EndDate: string | null = null,
    public Instructions: string | null = null,
    public MedicineName: string | null = null,
    public Mill: number | null = null,
    public No: string | null = null,
    public OrgAccount: string | null = null,
    public StartDate: string | null = null,
    public Status: 0 | 1 | null = null,
    public Time1: string | null = null,
    public Time2: string | null = null,
    public Time3: string | null = null,
    public Time4: string | null = null,
    public Type: string | null = null,
    public actionType: '新增' | '編輯' | null = null,
    //與interface一樣先定義類型
    //利用constructor特性去賦予值(沒有賦予值的話是無法new成一個物件，會報錯～)
  ) { }
}
