import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { ChatPageComponent } from './chat-page/chat-page.component';

export const routes: Routes = [
    { path: 'login', component: RegisterComponent },
    { path: 'chat', component: ChatPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }