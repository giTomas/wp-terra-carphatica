import { connect } from 'react-redux';
import membersLoader from '../../redux/actionCreators/members';
import PageLoading from '../presentational/pageLoading'
import { checkSuccess } from '../../selectors/';
import ComponentWithLoading from './componentWithLoading';

const mapStateToProps = state => ({
  success: checkSuccess(state),
});

const mapDispatchToProps = dispatch => ({
  fetchResource: () => dispatch(membersLoader())
});

const WrappedDataLoader = ComponentWithLoading(PageLoading)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedDataLoader)
