import { RecMediListService } from './../../_shared/service/rec-medi-list.service';
import { CatchApiService } from './../../_shared/service/catch-api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { inputParameter, listCloun, recMediDataResult, apiFeedback } from 'src/app/_shared/model/table';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PagerData } from 'src/app/_component/pagination/pagination';

@Component({
  selector: 'app-page-a',
  templateUrl: './page-a.component.html',
  styleUrls: ['./page-a.component.scss']
})
export class PageAComponent implements OnInit {
  @ViewChild('myForm', { static: false }) myform!: NgForm;
  /**
   * 將取得subscribe的函式存在這
   * @param recMediResult
   */
  getRecMediList!: Subscription;
  /**
  * 將取得資料存入此陣列
  * @param recMediResult
  */
  recMediResult: recMediDataResult[] = [];
  ValChange: PagerData = {
    DataCount: 10,
    PageIndex: 1,
    DataResult: []
  };

  Update: number = 0;
  inputParameter = new inputParameter();
  cloum = new listCloun(); //欄位名稱

  constructor(private CatchApiService: CatchApiService, private RecMediListService: RecMediListService) {
    this.RecMediListService.recMedi.subscribe(res => { this.recMediResult = res });
  }

  ngOnInit(): void {
    //取得資料表
    this.inputParameter.PageCount = 10;
    this.inputParameter.PageIndex = 1;
    //呼叫API
    this.CatchApiService.myRecMediPost(this.inputParameter, 'HealthCare/GetRecMediList')
      .subscribe((res: apiFeedback) => {
        //得到DataCount總筆數,第一頁,DataResult
        this.ValChange = {
          DataCount: 12,
          PageIndex: 1,
          DataResult: res.Data.DataResult
        };
        this.RecMediListService.recMedi.next(res.Data.DataResult);
      })
  }


  //1.打開input新增
  showAddRecMedi() {
    const RecMediList: recMediDataResult[] = JSON.parse(JSON.stringify(this.recMediResult));
    RecMediList.unshift(new recMediDataResult());//再去新增一
    RecMediList[0].actionType = '新增';//第二列將新增的欄位填為true
    this.RecMediListService.recMedi.next(RecMediList);
    //input
    console.log(this.recMediResult);
  }

  //2.新增/編輯送出
  onAddRecMedi(index: number, actionType: string | null) {
    console.log(this.myform.valid)
    if (!this.myform.valid) {
      this.myform.form.markAllAsTouched();
      return
    }
    if (actionType === '新增') {
      this.CatchApiService.myRecMediPost(this.recMediResult[index], 'HealthCare/AddRecMedi').subscribe(res => {
        this.recMediResult.splice(index, 1)
      });
      return
    }
    if (actionType === '編輯') {
      this.CatchApiService.myRecMediPost(this.recMediResult[index], 'HealthCare/UpdateRecMedi').subscribe(res => {
        this.recMediResult[index].actionType = '';
      });
      return
    }
  }
  //3.編輯/取消
  //如果按編輯將index存起來並且在按新增時關閉input
  onEditRecMedi(index: number) {
    //先判斷欄位是否有值
    if (this.recMediResult[index].actionType === '新增') { //沒有就刪除
      this.recMediResult.splice(index, 1);
    } else if (this.recMediResult[index].actionType === '編輯') { //有就判斷是否為需編輯或取消編輯
      this.recMediResult[index].actionType = '';
    } else { //有就判斷是否為需編輯或取消編輯
      this.recMediResult[index].actionType = '編輯';
    }
  }

  //頁碼資料-目前沒作用
  onValChange(val: PagerData) {
    console.log(val)
    this.inputParameter.PageIndex = val.PageIndex;
    this.inputParameter.PageCount = val.DataCount;
    this.CatchApiService.myRecMediPost(this.inputParameter, 'HealthCare/GetRecMediList')
      .subscribe((res: apiFeedback) => {
        this.recMediResult = res.Data?.DataResult;
        console.log(res, 46)
      })
  }
  //搜尋
  onUpdate(num: number) {
    this.getList(num)
  }
  //
  getList(num: number) {
    this.inputParameter.PageIndex = num;
    this.CatchApiService.myRecMediPost(this.inputParameter, 'HealthCare/GetRecMediList')
      .subscribe((res: apiFeedback) => {
        //得到DataCount總筆數,第一頁,DataResult
        this.ValChange!.DataCount = res.Data.DataCount;
        this.ValChange!.PageIndex = num;
        this.ValChange!.DataResult = res.Data.DataResult;
        this.RecMediListService.recMedi.next(res.Data.DataResult);
        console.log(res, 46)
      })
  }
}
