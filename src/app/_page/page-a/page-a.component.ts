import { CatchApiService } from './../../_shared/service/catch-api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { inputParameter, listCloun, recMediDataResult, apiFeedback } from 'src/app/_shared/model/table';
import { NgForm } from '@angular/forms';
import { PagerData } from 'src/app/_component/pagination/pagination';

@Component({
  selector: 'app-page-a',
  templateUrl: './page-a.component.html',
  styleUrls: ['./page-a.component.scss']
})
export class PageAComponent implements OnInit {
  @ViewChild('myForm', { static: false }) myform!: NgForm;
  /**
  * 將取得資料存入此陣列
  * @param recMediResult
  */
  recMediResult: recMediDataResult[] = [];
  /**
  * 雙向綁定父子層
  * @param ValChange
  */
  ValChange: PagerData = {
    DataCount: 10,
    PageIndex: 1,
    DataResult: []
  };
  /**
    * GetRecMediListAPI入參
    * @param inputParameter
    */
  inputParameter = new inputParameter();
  //欄位名稱
  cloum = new listCloun();

  constructor(private CatchApiService: CatchApiService) { }

  ngOnInit(): void {
    this.onGetRecMedi(1);//呼叫API 第一頁
  }

  onUpdate(num: number) {
    this.onGetRecMedi(num);//分頁按鈕
  }

  //取得RecMediList
  onGetRecMedi(num: number) {
    this.inputParameter.PageIndex = num; //改第幾頁
    this.CatchApiService.myRecMediPost(this.inputParameter, 'HealthCare/GetRecMediList').subscribe((res: apiFeedback) => {
      //得到DataCount總筆數,第一頁,DataResult
      this.recMediResult = res.Data?.DataResult;
    })
  }

  //1.打開input新增
  showAddRecMedi() {
    const RecMediList: recMediDataResult[] = JSON.parse(JSON.stringify(this.recMediResult));
    RecMediList.unshift(new recMediDataResult());//再去新增一
    RecMediList[0].actionType = '新增';//第二列將新增的欄位填為true
    this.recMediResult = RecMediList;
  }

  //2.新增/編輯送出
  onAddRecMedi(index: number, actionType: string | null) {
    if (!this.myform.valid) {
      this.myform.form.markAllAsTouched();
      return
    }
    if (actionType === '新增') {
      this.CatchApiService.myRecMediPost(this.recMediResult[index], 'HealthCare/AddRecMedi').subscribe(res => {
        this.recMediResult.splice(index, 1);
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
    switch (this.recMediResult[index].actionType) {
      //先判斷欄位是否有值
      case '新增'://沒有就刪除
        this.recMediResult.splice(index, 1);
        break;
      case '編輯'://有就判斷是否為需編輯或取消編輯
        this.recMediResult[index].actionType = '';
        break;
      default://有就判斷是否為需編輯或取消編輯
        this.recMediResult[index].actionType = '編輯';
        break;
    }
  }

}
