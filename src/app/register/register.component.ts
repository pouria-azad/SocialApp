import {Component} from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormBuilder, FormGroup} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,MatCheckboxModule,MatButtonModule,NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  loginFormControl: FormGroup = new FormGroup({
    mobile: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^(\\+98|0)?9\\d{9}$')])),
    checked: new FormControl('',)
  })
mobileFormControl: any;
  constructor(private router: Router, private http: HttpClient){}
  onSubmit() {
    if( this.loginFormControl.valid ){
    this.http.post('http://localhost:3000/api/login', this.loginFormControl.value)
    .subscribe(response=> {
      console.log('login success', response);
    }, error => {
      console.log('login failed', error);
    })
    }else{
      console.log('data is invalid');
    }
  }

  

}
