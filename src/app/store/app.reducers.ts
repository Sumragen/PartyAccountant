import {ActionReducerMap} from '@ngrx/store';
import {PartyState} from '../shared/interfaces/PartyState';
import * as PartyReducers from '../modules/party/store/party.reducers';

export interface AppState {
  parties: PartyState;
}

export const reducers: ActionReducerMap<AppState> = {
  parties: PartyReducers.PartyReducers
};
