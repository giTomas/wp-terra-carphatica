import { connect } from 'react-redux';
import {
  articleReset,
  articleLoader,
} from '../../redux/actionCreators/article';
import { getIdAuthor } from '../../selectors/';
import  Article from '../presentational/clanok';
import ComponentWithLoading from './componentWithLoading';
import ComponentWithReset from './componentWithReset';

const WrappedPost = ComponentWithReset(ComponentWithLoading(Article));

const mapStateToProps = (state, props) => ({
  authors: getIdAuthor(state.members.data),
  resource: state.article.data,
  // data: addArticle(state, props),
});

const mapDispatchToProps = dispatch => ({
  resetResource: () => {
    dispatch(articleReset());
  },
  fetchResource: (id) => dispatch(articleLoader(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedPost);
