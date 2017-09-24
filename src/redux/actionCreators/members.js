import { MEMBERS } from '../actions/';
import { createAsyncAction } from './genericActions';
import { fetchMembers } from '../../http/';

const membersLoader = createAsyncAction(MEMBERS, fetchMembers);

export default membersLoader;
