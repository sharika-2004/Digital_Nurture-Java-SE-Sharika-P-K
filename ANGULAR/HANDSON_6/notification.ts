import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-notification-node',
  standalone: true,
  imports: [CommonModule],
  providers: [NotificationService], 
  template: `
    <div style="border: 1px solid #ccc; padding: 12px; border-radius: 4px; background: #fff; margin-bottom: 10px;">
      <p>Local Logs Count: <strong>{{ msgService.loggedMessages.length }}</strong></p>
      <button (click)="msgService.addLog('Log Entry Triggered')" style="font-size:11px; padding: 4px 8px; cursor: pointer;">Add Log</button>
      <div *ngFor="let log of msgService.loggedMessages" style="font-size:11px; color: gray; margin-top: 4px;">{{ log }}</div>
    </div>
  `
})
export class NotificationComponent {
 
  constructor(public msgService: NotificationService) {}
}

@Component({
  selector: 'app-notification-sandbox',
  standalone: true,
  imports: [CommonModule, NotificationComponent],
  template: `
    <div style="background: white; padding: 24px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.05); font-family: sans-serif;">
      <h3>Hierarchical DI Instance Proof Sandbox</h3>
      <hr/>
      <div style="display: flex; gap: 40px; margin-top: 15px;">
        <div><h5>Notification Widget Area 1</h5><app-notification-node></app-notification-node></div>
        <div><h5>Notification Widget Area 2</h5><app-notification-node></app-notification-node></div>
      </div>
    </div>
  `
})
export class NotificationSandboxComponent {}
