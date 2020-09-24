import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CustomNotificationService } from 'src/app/services/custom-notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.sass']
})
export class NotificationComponent implements OnInit {
  @ViewChild('notificationElement', { static: false }) notificationElement: ElementRef;
  public notification = {
    type: '',
    text: '',
  };

  constructor(
    private notificationService: CustomNotificationService
  ) { }

  ngOnInit(): void {
    this.notificationService.getNotification().subscribe(({ type, text }) => {
      this.notification.type = type;
      this.notification.text = text;

      if (this.notificationElement) {
        this.notificationElement.nativeElement.classList.replace('hide-notification', 'show-notification');

        setTimeout(() => {
          this.notificationElement.nativeElement.classList.replace('show-notification', 'hide-notification');
        }, 6000);
      }
    });
  }
}
