import { connect } from 'react-redux';
import { articleLoader } from '../actionCreators/article';
import { getIdAuthor } from '../selectors/';
import  Article from '../presentational/clanok';
import ComponentWithLoading from './componentWithLoading';
import ComponentWithReset from './componentWithReset';

const WrappedClanok = ComponentWithLoading(Article);

const mapStateToProps = (state, props) => ({
  authors: getIdAuthor(state.members.data),
  resource: state.article.data,
});

const mapDispatchToProps = dispatch => ({
  fetchResource: () => dispatch(articleLoader())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedClanok);
