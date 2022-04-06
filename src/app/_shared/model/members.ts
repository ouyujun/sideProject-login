export class MembersList {
    private email: string = "";
    private password: string = "";

    constructor(memberList: { email: string, password: string }) {
        this.email = memberList.email;
        this.password = memberList.password;
    }
}

export class Membersinfo {
    private email: string = "";
    private status: boolean = false;
    private name: string = "";

    constructor(memberList: { email: string, status: boolean, name: string }) {
        this.email = memberList.email;
        this.status = memberList.status;
        this.name = memberList.name;
    }
}
