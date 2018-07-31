import {Party} from '../../shared/interfaces/Party';
import {Injectable} from '@angular/core';

@Injectable()
export class PartyService {
  private _parties: Party[] = [];

  constructor() {
  }

  getParties(): Party[] {
    return this._parties;
  }
}
