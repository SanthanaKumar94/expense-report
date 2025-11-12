import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Welcome } from './welcome/welcome';

export const routes: Routes = [
  { path: '', component: Welcome },
  { path: 'dashboard', component: Dashboard }
];
