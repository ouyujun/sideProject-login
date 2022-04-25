
export class MembersList {
  constructor(
    public email: string | null = null,
    public password: string | null = null
    //與interface一樣先定義類型
    //再利用constructor特性去賦予值(沒有賦予值的話是無法new成一個物件，會報錯～)
  ) { }
}
//以上就是與interface的差異

export class userState {
  constructor(
    public userMail: string | null = null,
    public userState: boolean = false
    //與interface一樣先定義類型
    //再利用constructor特性去賦予值(沒有賦予值的話是無法new成一個物件，會報錯～)
  ) { }
}
