import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PartyListComponent} from './party-list/party-list.component';
import {PartyService} from './party.service';
import { PartyComposerComponent } from './party-composer/party-composer.component';
import { PartyComponent } from './party.component';
import {ReactiveFormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule
  ],
  declarations: [
    PartyListComponent,
    PartyComposerComponent,
    PartyComponent
  ],
  providers: [
    PartyService
  ]
})
export class PartyModule {
}
