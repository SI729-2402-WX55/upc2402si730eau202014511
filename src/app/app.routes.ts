import { Routes } from '@angular/router';
import {HomeContentComponent} from './public/pages/home-content/home-content.component';
import {CkeckInComponent} from './registration/pages/ckeck-in/ckeck-in.component';

export const routes: Routes = [
  { path: 'home', component: HomeContentComponent },
  { path: '',  redirectTo: 'home', pathMatch: 'full' },
  { path: 'registration/event-check-ins/new', component: CkeckInComponent },
];
