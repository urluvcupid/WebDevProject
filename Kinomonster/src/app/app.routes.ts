import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components3/login/login.component';
import { RegisterComponent } from './components2/register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: 'login' },
];
