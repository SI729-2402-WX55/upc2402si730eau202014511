import { Routes } from '@angular/router';
import {HomeContentComponent} from './public/pages/home-content/home-content.component';
import {CkeckInComponent} from './registration/pages/ckeck-in/ckeck-in.component';
import {NotFoundPageComponent} from './public/pages/not-found-page/not-found-page.component';

export const routes: Routes = [
  { path: 'home', component: HomeContentComponent },
  { path: '',  redirectTo: 'home', pathMatch: 'full' },
  { path: 'registration/event-check-ins/new', component: CkeckInComponent },
  { path: '**', component: NotFoundPageComponent }
];
