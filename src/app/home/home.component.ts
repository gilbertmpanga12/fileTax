import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MainserviceService } from '../services/mainservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  
constructor(public service: MainserviceService){
  
}

ngOnInit(){}

}
