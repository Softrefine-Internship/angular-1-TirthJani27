import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isEditing = false;
  name = '';
  age = '';
  phoneno = '';
  email = '';
  id = 0;

  set() {
    const userIndex = this.data.findIndex((user) => user.id === this.id);
    if (userIndex !== -1) {
      this.data[userIndex] = {
        id: this.id,
        name: this.name,
        age: this.age,
        email: this.email,
        phoneno: this.phoneno,
      };
    }
    this.isEditing = false; 
  }

  setIsEditing(user: any) {
    this.id = user.id;
    this.name = user.name;
    this.age = user.age;
    this.email = user.email;
    this.phoneno = user.phoneno;
    this.isEditing = true; 
  }

  data = [
    {
      id: 1,
      name: 'Death Monk',
      email: 'death@monk.gmail.com',
      age: '20',
      phoneno: '9474561230',
    },
    {
      id: 2,
      name: 'John Doe',
      email: 'john@doe.gmail.com',
      age: '50',
      phoneno: '9475551230',
    },
    {
      id: 3,
      name: 'Janak Maru',
      email: 'janak@maru.gmail.com',
      age: '32',
      phoneno: '9626261230',
    },
    {
      id: 4,
      name: 'Akhilesh Yadav',
      email: 'akhilesh@yadav.gmail.com',
      age: '55',
      phoneno: '6664561230',
    },
    {
      id: 5,
      name: 'Krina Masru',
      email: 'k@masu.gmail.com',
      age: '22',
      phoneno: '947123123',
    },
    {
      id: 6,
      name: 'Yagnesh Makwana',
      email: 'yagnesh@makwana.gmail.com',
      age: '50',
      phoneno: '9475551230',
    },
  ];
}
