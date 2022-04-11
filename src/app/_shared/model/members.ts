
export class MembersList {
    public email: string|null;
    public password:string|null;
    //與interface一樣先定義類型
    constructor() {
        //再利用constructor特性去賦予值(沒有賦予值的話是無法new成一個物件，會報錯～)
        this.email = null;
        this.password = null;
    }
    abc=()=>{
    console.log("A")
    }

}
//以上就是與interface的差異

//以下是我個人以前的寫法，會沒有報錯是因為我在類型就給值了
// export class MembersList {
//     public email: string | null=null;
//     public password:string |null=null;
// }

//callback function
//Directive{providers}
//