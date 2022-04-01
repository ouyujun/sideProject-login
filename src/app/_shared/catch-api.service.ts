
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators'; <--處理錯誤


@Injectable({
  providedIn: 'root'
})
export class CatchApiService {

  constructor(private http: HttpClient) {}

  configUrl = '../../assets/member.json';
  getMember():Observable<any>{
    return this.http.get<any>(this.configUrl);
  }
}
