import { Component, OnInit } from '@angular/core';

interface Registration{
  name: string;
  control: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  date: Date = new Date();
year: number = this.date.getFullYear();
  controls: Registration[] = [{
    name: 'First name',
    control: 'firstName'
  },{
    name: 'Last name',
    control: 'lastName'
  }, {
    name: 'email',
    control: 'email'
  },
{
  name: 'Address',
  control: 'address'
},
{
  name: 'Date of birth',
  control: 'dateOfBirth'
},
{
  name: 'Password',
  control: 'password'
}
]
  constructor() { }

  ngOnInit(): void {
  }

}
