import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  rForm : FormGroup;
  post : any;
  name : String = '';
  password : String = '';
  nameAlert : String = 'Name is Required';
  passwordAlert : String = 'Password is Required'

  constructor(private fb : FormBuilder){

    this.rForm = fb.group({
      'name' : ['', Validators.required],
      'password' : ['', Validators.required],
      'validate' : []
    });

  }

  addPost(value){

    this.name = value.name;
    this.password = value.password;
    
  }

}
