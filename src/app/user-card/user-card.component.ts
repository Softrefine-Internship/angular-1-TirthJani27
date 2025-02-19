import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  @Input() data: any; 
  @Output() op = new EventEmitter<any>(); 

  // Initialize properties
  name = '';
  age = '';
  email = '';
  phoneno = '';
  id = '';
  isEditing = false;

  // On initialization, set the properties from the input data
  ngOnInit() {
    this.name = this.data.name;
    this.age = this.data.age;
    this.email = this.data.email;
    this.phoneno = this.data.phoneno;
    this.id = this.data.id;
  }

  // Toggle edit mode and emit the current data back to the parent
  setIsEditing() {
    this.isEditing = !this.isEditing; // Toggle the editing state
    this.op.emit({
      id: this.id,
      name: this.name,
      age: this.age,
      email: this.email,
      phoneno: this.phoneno,
      isEditing: this.isEditing,
    });
  }
}
