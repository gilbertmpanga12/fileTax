import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface Section {
  date: string;
  updated: Date;
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  displayedColumns: string[] = ['date', 'taxFiled'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

export interface PeriodicElement {
  date: string;
  taxFiled: string;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {taxFiled: 'Pay As You Earn', date: '2020-03-12'},
  {taxFiled: 'Tax Returns', date: '2020-03-13'},
  {taxFiled: 'Stock Options', date: '2020-05-12'},
  {taxFiled: 'Company Cuts', date: '2019-03-12'},
  {taxFiled: 'OTT Taxes', date: '2030-03-12'},
  {taxFiled: 'Calson Taxes', date: '2013-03-12'},
  {taxFiled: 'Gemini taxes', date: '2020-07-12'}
];
