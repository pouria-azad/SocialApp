import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, RouterModule],
  template: `
  <section>
    <div class="button-row">
      <button mat-raised-button [routerLink]="['/']">صفحه اصلی</button>
      <button mat-raised-button color="primary" [routerLink]="['login']">ورود</button>
      <button mat-raised-button color="accent">Accent</button>
      <button mat-raised-button color="warn">Warn</button>
      <button mat-raised-button disabled>Disabled</button>
  </div>
</section>

<mat-divider></mat-divider>
  `,
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
