import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Link,
  NavLink,
} from 'react-router-dom';
import {
  fetchCategory,
} from '../http/fetch'
import {
  categoryId,
} from '../actionCreators/categories';
import {
  postsListLoaded,
  postsListError,
  setPostId,
  postsListReset,
} from '../actionCreators/posts';

class Sekcia extends Component {

  async componentDidMount() {
    const {sekcia} = this.props.match.params;
    await this.props.categoryId(sekcia);
    try {

      const posts = await fetchCategory(this.props.categoryToLoad.id);
      this.props.postsListLoaded(posts);
    }
    catch (err) {
      this.props.postsListError(err.message);
      console.log(err.message);
    }
    console.log(this.props.categoryToLoad);
  }

  componentWillUnmount() {
    console.log('unmount');
    this.props.postsListReset();
  }

  render() {
    // console.log(this.props);
    return (
      <div className="">
        <h2>Sekcia {this.props.match.params.sekcia}</h2>
        {this.props.posts.map(post => <h2 key={post.slug}>{post.title}</h2>)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categoryToLoad: state.categoriesState.categoryToLoad,
  posts: state.postsList.posts,
  postsError: state.postsList.error,
  postsLoaded: state.postsList.loaded,
});

const mapDispatchToProps = dispatch => ({
  categoryId: (slug) => {
    console.log('action:'+slug)
    dispatch(categoryId(slug));
  },
  postsListLoaded: (posts) => {
    dispatch(postsListLoaded(posts));
  },
  postsListError: (errMsg) => {
    dispatch(postsListError(errMsg));
  },
  postsListReset: () => {
    dispatch(postsListReset())
  }
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sekcia));
