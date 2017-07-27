import { connect } from 'react-redux';
import {
  memberReset,
  memberLoader,
} from '../actionCreators/member';
import Member from '../presentational/member';
import ComponentWithLoading from './componentWithLoading';

const mapStateToProps = (state, props) => ({
  member: state.member,
});

const mapDispatchToProps = dispatch => ({
  resetResource: () => {
    dispatch(memberReset());
  },
  fetchResource: (id) => dispatch(memberLoader(id))
});

const WrappedClen = ComponentWithLoading(Member);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedClen);
