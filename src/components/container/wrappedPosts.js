import { connect } from 'react-redux';
import React from 'react';
import { postsLoader } from '../../redux/actionCreators/posts';
import { getIdAuthor } from '../../selectors/';
import  Posts from '../presentational/posts';
import ComponentWithLoading from './componentWithLoading';
// import { createMarkup } from '../helpers/';
// dangerouslySetInnerHTML={createMarkup(resource.content)} />

// const AddPost =  ({thumb,excerpt,date,slug,author,title}) => (
//     <li className="post" key={slug}>
//       <div className="postHoverGroup">
//
//         {thumb && <figure className="postFigure"><img className="postImage" src={thumb} alt=''/></figure>}
//         <h3 className="postTitle">{title}</h3>
//       </div>
//       <div className="postDataGroup">
//         <h4 className="postAuthor">{author}</h4>
//         <h4 className="postDate">{date}</h4>
//       </div>
//       <p className="postExcerpt">{excerpt}</p>
//     </li>
// );
//
// const PostsList = ({resource}) => (
//   <ul className="l-wide postsContainer">
//     {map(AddPost, resource)}
//   </ul>
// );

const WrappedPosts = ComponentWithLoading(Posts);

const mapStateToProps = (state, props) => ({
  authors: getIdAuthor(state.members.data),
  resource: state.posts.data,
});

const mapDispatchToProps = dispatch => ({
  fetchResource: () => dispatch(postsLoader()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedPosts);
