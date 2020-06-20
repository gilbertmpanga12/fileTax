import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MainserviceService } from '../services/mainservice.service';



@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SettingsComponent {
   constructor(public service: MainserviceService){}
}
