
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editRecordId = null;
  formData: any = [];
  title = 'Forms';
  @ViewChild('f')
  Forms!: NgForm;
  genders = ['male', 'female']
  user = {
    id: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    gender: "",
  }

  form = ['one', 'two', 'three'];
  selected = 'two'
  submitted = false;

onEdit(user: { [x: string]: any; id: any; }){

  const {id, ...data} = user

    // set edit record ID
  this.editRecordId = id;

  // set form value with selected user
  this.Forms.setValue(data)

}

onDelete(user: { id: any; }) {
    // filter out deleted entry from form data array matching
    // with the ID of deleted user record with ID from form data array
    this.formData = this.formData.filter((data: { id: any; }) => data.id !== user.id)
}

  onSubmit() {
    this.submitted = true;

    if (this.editRecordId) {

      this.formData = this.formData.map((data: { id: null; }) => {
        return data.id === this.editRecordId ? this.Forms.value : data;
      })


      this.editRecordId = null;
    } else {

     const id = Date.now();

     const data = {
       id,
       ...this.Forms.value
     }
     this.formData.push(data)
    }


  this.Forms.reset();
  }

}

