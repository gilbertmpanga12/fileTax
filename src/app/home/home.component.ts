import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MainserviceService } from '../services/mainservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private firestore: AngularFirestore, private service: MainserviceService) { }

  ngOnInit(): void {
  }



}
