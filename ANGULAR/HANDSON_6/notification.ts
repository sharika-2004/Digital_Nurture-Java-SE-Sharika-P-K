import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {
  public loggedMessages: string[] = [];
  
  addLog(msg: string) {
    this.loggedMessages.push(msg);
  }
}
