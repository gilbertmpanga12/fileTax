import { Component, ViewEncapsulation} from '@angular/core';
import { MainserviceService } from '../services/mainservice.service';


@Component({
  selector: 'app-offline',
  templateUrl: './offline.component.html',
  styleUrls: ['./offline.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OfflineComponent {
  constructor(public service : MainserviceService){}
}
