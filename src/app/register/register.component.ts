import { Component, } from '@angular/core';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  number!: number;
  onSubmit() {
    // در این قسمت می توانید عملیات ثبت نام را انجام دهید
    // مثلا داده ها را در یک آرایه ذخیره کنید یا به سرور ارسال کنید
    console.log(`Number is: ${this.number}`)
  }
}
