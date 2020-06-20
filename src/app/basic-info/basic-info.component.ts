import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MainserviceService } from '../services/mainservice.service';


@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BasicInfoComponent {
 constructor(public service: MainserviceService){}
}
