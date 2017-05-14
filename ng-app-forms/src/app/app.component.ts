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
  description : String = '';
  alertText : String = 'This Field is Required';

  constructor(private fb : FormBuilder){

    this.rForm = fb.group({
      'name' : ['', Validators.required],
      'description' : ['', Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(300)])],
      'validate' : ''
    });

  }

  ngOnInit(){

    // can subscribe to any of the above form elements
    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if(validate == 1){
          this.rForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
          this.alertText = "Minimum 3 characters are required";
        }else{
          this.rForm.get('name').setValidators([Validators.required]);
          this.alertText = "This Field is Required";
        }
        this.rForm.get('name').updateValueAndValidity();
      }
    );

  }

  addPost(post){

    this.name = post.name;
    this.description = post.description;

  }

}
