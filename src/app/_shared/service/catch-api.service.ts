
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiFeedback, recMediData,recMediDataResult } from '../model/table';
import { environment } from 'src/environments/environment';
// import { catchError, retry } from 'rxjs/operators'; <--處理錯誤
@Injectable({
  providedIn: 'root'
})
export class CatchApiService {

  configApiUrl = environment.apiUrl;
  configUrl = environment.configUrl;
  objToken = environment.objToken;

  //這邊有兩種類型 recMediList、addFeedBack共同使用這個function
  constructor(private http: HttpClient) { }
  /**
   * 取得會員資料
   * @function getMember
   */
  getMember(): Observable<any> {
    return this.http.get<any>(this.configUrl);
  }
  /**
   * 共用API Function
   * @function myRecMediPost
   */
  myRecMediPost(data: Object, apiUrl: string) {
    (data as recMediDataResult).Status=(data as recMediDataResult).Status?1:0;
    const obj3 = { ...data, Token: this.objToken };
    return this.http.post<apiFeedback>(`${this.configApiUrl}${apiUrl}`, obj3);
  }
}
