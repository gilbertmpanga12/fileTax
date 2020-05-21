import { Component, OnInit } from '@angular/core';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  folders: Section[] = [
    {
      name: '5 services requested for offline filing',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Completed filing Pay As You Earn',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Completed filing tax returns',
      updated: new Date('1/28/16'),
    }
  ];
 
  constructor() { }

  ngOnInit(): void {
  }

}
