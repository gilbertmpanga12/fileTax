import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AngularFirestore} from '@angular/fire/firestore';
import { MainserviceService } from '../../services/mainservice.service';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-company-history',
  templateUrl: './company-history.component.html',
  styleUrls: ['./company-history.component.scss']
})
export class CompanyHistoryComponent implements OnInit {
  displayedColumns: string[] = ['date', 'taxFiledName'];
  dataSource: MatTableDataSource<History>;
  isDataAvailable: boolean = true;
  constructor(private firestore: AngularFirestore, private service: MainserviceService){
  
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    
  }

  ngAfterView(){
    this.firestore.collection<History>('companyHistory').valueChanges().subscribe(data => {
      this.dataSource = new MatTableDataSource(data); 
      this.isDataAvailable = this.dataSource.data.length == 0;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  trackByUid(index, item) {
    return item.uid;
  }

}
