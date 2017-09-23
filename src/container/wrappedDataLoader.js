import { connect } from 'react-redux';
import {
  membersCategoriesLoader,
} from '../redux/actionCreators/membersCategories';
import PageLoading from '../presentational/pageLoading'
import { checkSuccess } from '../selectors/';
import ComponentWithLoading from './componentWithLoading';

const mapStateToProps = state => ({
  success: checkSuccess(state),
});

const mapDispatchToProps = dispatch => ({
  fetchResource: () => dispatch(membersCategoriesLoader())
});

const WrappedDataLoader = ComponentWithLoading(PageLoading)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedDataLoader)
