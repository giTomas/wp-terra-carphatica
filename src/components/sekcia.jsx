import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { fetchCategory, } from '../http/fetch'
import {
  postsListLoaded,
  postsListError,
  postsListReset,
} from '../actionCreators/posts';
import { getSlugId } from '../selectors';

class Sekcia extends Component {



  async componentDidMount() {

    const { id } =  this.props.viewData[this.props.match.params.sekcia]
    console.log(`id: ${id}`);
    try {
      const posts = await fetchCategory(id);
      this.props.postsListLoaded(posts);
    }
    catch (err) {
      this.props.postsListError(err.message);
      console.log(err.message);
    }
  }

  componentWillUnmount() {
    console.log('unmount');
    this.props.postsListReset();
  }

  render() {
    const { name } = this.props.viewData[this.props.match.params.sekcia]
    return (
      <div className="">
        <h2>Sekcia {name}</h2>
        {this.props.posts.map(post => <h2 key={post.slug}>{post.title}</h2>)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.postsList.posts,
  postsError: state.postsList.error,
  postsLoaded: state.postsList.loaded,
  viewData: getSlugId(state.categoriesState.categories),
});

const mapDispatchToProps = dispatch => ({
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

// export default withRouter(connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(Sekcia));
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sekcia);
