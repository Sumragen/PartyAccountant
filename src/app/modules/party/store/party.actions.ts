import {Action} from '@ngrx/store';
import {Party} from '../../../shared/interfaces/Party';

export const ACTIONS = {
  CREATE_PARTY : 'CREATE_PARTY'
};

export class CreateParty implements Action {
  readonly type = ACTIONS.CREATE_PARTY;

  constructor(public payload: Party) {
  }
}

export type PartyActions = CreateParty;
