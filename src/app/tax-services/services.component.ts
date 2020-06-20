import { Component, ViewEncapsulation} from '@angular/core';
import { MainserviceService } from '../services/mainservice.service';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ServicesComponent {
  constructor(public service: MainserviceService){}
}
