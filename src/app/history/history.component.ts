import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MainserviceService } from '../services/mainservice.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HistoryComponent {
 constructor(public service: MainserviceService){}

}

