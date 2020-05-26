import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MainserviceService } from '../services/mainservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items$: Observable<any>;
  constructor(private firestore: AngularFirestore, private service: MainserviceService) { 
    this.items$ = firestore.collection('dashbordCounts').doc(this.service.user.uid).valueChanges();
  }

  ngOnInit(): void {
    
  }



}
