import { Injectable } from '@angular/core';
import { QR } from '../entity/qr-object';

@Injectable({
  providedIn: 'root'
})
export class StorageutilService {

  private historyCount: number;

  constructor() { }

  saveHistory(key : string, item :string) {
    localStorage.setItem(key, item)
    this.historyCount = this.historyCount + 1;
  }

  readHistory(key : string) : string {
    return localStorage.getItem(key)
  }

  readAllHistory() : Array<QR> {
    const qrList = new Array<QR>();

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      if (key && value) {
        const qr = new QR(key, value);
        qrList.push(qr);
      }
    }
    this.historyCount = qrList.length;
    return qrList;
  }

  getHistoryCount(): number {
    if (this.historyCount) {
      return this.historyCount;
    }

    this.readAllHistory();
    return this.historyCount;
  }

  deleteHistory(key : string) {
    localStorage.removeItem(key)
    this.historyCount = this.historyCount - 1;
  }
}
