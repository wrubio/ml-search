import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomNotificationService {

  private routerInfo: BehaviorSubject<boolean>;

  constructor() {
    this.routerInfo = new BehaviorSubject<any>({
      type: 'warning',
      text: 'Hello world'
    });
  }

  getNotification(): Observable<any> {
    return this.routerInfo.asObservable();
  }

  notify(newValue): void {
    this.routerInfo.next(newValue);
  }
}
