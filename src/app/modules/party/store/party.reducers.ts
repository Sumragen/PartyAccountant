import {PartyState} from '../../../shared/interfaces/PartyState';
import * as fromParty from './party.actions';

const defaultState: PartyState = {
  parties: []
};

export function PartyReducers(state: PartyState = defaultState, action: fromParty.PartyActions) {
  switch (action.type) {
    case fromParty.ACTIONS.CREATE_PARTY: {
      console.log(action);
      return {
        ...state,
        parties: [...state.parties, {name: action.payload.name}]
      };
    }
    default: {
      return state;
    }
  }
}
