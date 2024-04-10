import {Component} from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';





@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,MatCheckboxModule,MatButtonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  number!: number;
  checked: boolean = false;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  onSubmit() {
    // در این قسمت می توانید عملیات ثبت نام را انجام دهید
    // مثلا داده ها را در یک آرایه ذخیره کنید یا به سرور ارسال کنید
    console.log(`Number is: ${this.number}`)
  }
}
