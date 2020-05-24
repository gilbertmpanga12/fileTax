import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-authenticated',
  templateUrl: './not-authenticated.component.html',
  styleUrls: ['./not-authenticated.component.scss']
})
export class NotAuthenticatedComponent implements OnInit {
  date: Date = new Date();
year: number = this.date.getFullYear();
  constructor() { }

  ngOnInit(): void {
  }

}
