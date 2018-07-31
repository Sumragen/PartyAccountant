import {Routes} from '@angular/router';
import {PartyComponent} from './modules/party/party.component';

export const routes: Routes = [
  {
    path: 'parties',
    component: PartyComponent
  },
  {
    path: '',
    redirectTo: '/parties',
    pathMatch: 'full'
  }
];
