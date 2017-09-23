import { connect } from 'react-redux';
import {
  memberReset,
  memberLoader,
} from '../redux/actionCreators/member';
import Member from '../presentational/member';
import ComponentWithLoading from './componentWithLoading';
import ComponentWithReset from './componentWithReset';

const mapStateToProps = (state) => ({
  resource: state.member.data,
});

const mapDispatchToProps = dispatch => ({
  resetResource: () => {
    dispatch(memberReset());
  },
  fetchResource: (id) => dispatch(memberLoader(id))
});

const WrappedClen = ComponentWithReset(ComponentWithLoading(Member));

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedClen);
