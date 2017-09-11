import { connect } from 'react-redux';
import React from 'react';
import { map } from 'ramda';
import { postsLoader } from '../actionCreators/posts';
import { getIdAuthor } from '../selectors/';
import  Posts from '../presentational/posts';
import ComponentWithLoading from './componentWithLoading';
import { createMarkup } from '../helpers/';

// dangerouslySetInnerHTML={createMarkup(resource.content)} />

const AddPost =  ({thumb,excerpt,date,slug,author,title}) => (
    <li class="post">
      <div class="postHoverGroup">

        {thumb && <figure class="postFigure"><img class="postImage" src={thumb}/></figure>}
        <h3 class="postTitle">{title}</h3>
      </div>
      <div class="postDataGroup">
        <h4 class="postAuthor">{author}</h4>
        <h4 class="postDate">{date}</h4>
      </div>
      <p class="postExcerpt">{excerpt}</p>
    </li>
);

const PostsList = ({resource}) => (
  <ul class="l-wide postsContainer">
    {map(AddPost, resource)}
  </ul>
);

const WrappedPosts = ComponentWithLoading(PostsList);

const mapStateToProps = (state, props) => ({
  authors: getIdAuthor(state.members.data),
  resource: state.posts.data,
});

const mapDispatchToProps = dispatch => ({
  fetchResource: () => dispatch(postsLoader())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedPosts);
