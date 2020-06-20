import { Component, ViewEncapsulation} from '@angular/core';
import { MainserviceService } from '../services/mainservice.service';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NotificationsComponent {
   constructor(public service: MainserviceService){}
}
