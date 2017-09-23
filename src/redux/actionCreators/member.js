import { MEMBER } from '../actions/';
import {
  createActionReset,
  createAsyncAction
} from './genericActions';
import { fetchMember } from '../../http/';

export const memberReset    = createActionReset(MEMBER);
export const memberLoader   = createAsyncAction(MEMBER, fetchMember)
