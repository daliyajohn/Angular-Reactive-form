import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  myForm: FormGroup;
  constructor( public fb: FormBuilder ) {
  }
  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['',  Validators.compose([<any>Validators.required, <any>Validators.maxLength(30)])],
      email : ['',  Validators.compose([<any>Validators.required, <any>Validators.maxLength(30)])],
      address : ['',  Validators.compose([<any>Validators.required, <any>Validators.maxLength(30)])],
      phone : ['',  Validators.compose([<any>Validators.required, <any>Validators.maxLength(30)])],
      city : ['',  Validators.compose([<any>Validators.required, <any>Validators.maxLength(30)])],
      state : ['',  Validators.compose([<any>Validators.required, <any>Validators.maxLength(30)])]
    });
    console.log(this.myForm);
  }
  submit(data: any) {
    // code
  }
}
