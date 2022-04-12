
export class MembersList {
    public email: string | null;
    public password: string | null;
    //與interface一樣先定義類型
    constructor() {
        //再利用constructor特性去賦予值(沒有賦予值的話是無法new成一個物件，會報錯～)
        this.email = null;
        this.password = null;
    }
}
//以上就是與interface的差異

export class userState {
    public userMail: string | null;
    public userState: boolean;
    //與interface一樣先定義類型
    constructor() {
        //再利用constructor特性去賦予值(沒有賦予值的話是無法new成一個物件，會報錯～)
        this.userMail = null;
        this.userState = false;
    }
}