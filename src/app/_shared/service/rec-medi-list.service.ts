import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { recMediDataResult } from '../model/table';

@Injectable({
  providedIn: 'root'
})
export class RecMediListService {
  recMedi = new BehaviorSubject<recMediDataResult[]>([]);
  constructor() { }
}
