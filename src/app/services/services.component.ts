import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute, Params, RoutesRecognized} from '@angular/router';
import {UserServices} from '../models/user-services';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  serviceName: string = '';
  description: string = '';
  buttonText: string = 'Upload File';
  constructor(private router: Router,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.serviceName = UserServices[param.serviceName]['serviceName'];
      this.description = UserServices[param.serviceName]['description'];

    });
  }

}
