import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MainserviceService } from '../services/mainservice.service';

@Component({
  selector: 'app-file-my-taxes',
  templateUrl: './file-my-taxes.component.html',
  styleUrls: ['./file-my-taxes.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FileMyTaxesComponent implements OnInit {

  constructor(public service: MainserviceService) { 
  }

  ngOnInit(): void {
  }

}
