import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store/app.reducers';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import * as fromParty from '../store/party.actions';

@Component({
  selector: 'app-party-composer',
  templateUrl: './party-composer.component.html',
  styleUrls: ['./party-composer.component.css']
})
export class PartyComposerComponent implements OnInit {

  composerForm: FormGroup;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.composerForm = new FormGroup({
      name: new FormControl('', [Validators.required])
    });
  }

  createParty(): void {
    this.store.next(new fromParty.CreateParty(this.composerForm.value));
  }

}
