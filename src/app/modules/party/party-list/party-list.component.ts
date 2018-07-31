import {Component, OnDestroy, OnInit} from '@angular/core';
import {PartyService} from '../party.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store/app.reducers';
import {Observable} from 'rxjs';
import {PartyState} from '../../../shared/interfaces/PartyState';

@Component({
  selector: 'app-party-list',
  templateUrl: './party-list.component.html',
  styleUrls: ['./party-list.component.css']
})
export class PartyListComponent implements OnInit, OnDestroy {

  public partyState: Observable<PartyState>;

  constructor(private partyService: PartyService,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.partyState = this.store.select('parties');
  }

  ngOnDestroy() {

  }
}
