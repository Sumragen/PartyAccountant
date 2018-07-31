import {Human} from './Human';
import {Good} from './Good';

export interface Party {
  name: string;
  date?: number;
  members?: Human[];
  goods?: Good[];
}
