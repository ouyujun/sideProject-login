
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiFeedback } from '../model/table';
import { environment } from 'src/environments/environment';
// import { catchError, retry } from 'rxjs/operators'; <--處理錯誤


@Injectable({
  providedIn: 'root'
})
export class CatchApiService {

  configApiUrl = environment.apiUrl;
  configUrl = environment.configUrl;
  config2Url = environment.config2Url;
  objToken=environment.objToken;
  //這邊有兩種類型 recMediList、addFeedBack共同使用這個function
  constructor(private http: HttpClient) { }


  getMember(): Observable<any> {
    return this.http.get<any>(this.configUrl);
  }
  getMemberInfo(): Observable<any> {
    return this.http.get<any>(this.config2Url);
  }

  myRecMediPost(data: Object, apiUrl: string) {
    const objToken = { Token: this.objToken }
    let obj3 = { ...data, ...objToken };
    console.log(obj3)
    return this.http.post<apiFeedback>(`${this.configApiUrl}${apiUrl}`, obj3);
  }
}
