import { Routes } from '@angular/router';
import { SignIn } from './component/forms/sign-in/sign-in';

export const routes: Routes = [
  { path: '', redirectTo: 'signIn', pathMatch: 'full' },
  { path: 'signIn', component: SignIn },
];
