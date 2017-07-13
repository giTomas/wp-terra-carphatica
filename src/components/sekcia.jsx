import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { fetchCategory, } from '../http/'
import {
  postsListLoaded,
  postsListError,
  postsListReset,
} from '../actionCreators/posts';
import { getSlugId, getIdAuthor } from '../selectors/';

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
      <div className="post-list">
        <h2 className="">Sekcia {name}</h2>
        {this.props.posts.map(post =>
          <div className="post-list__item" key={post.slug}>
            <Link to={`/sekcie/${this.props.match.params.sekcia}/${post.slug}`}><h2 className="post--title">{post.title}</h2></Link>
            <p className="article--date">{post.date}</p>
            <h3 className="article--author">{this.props.authors[post.author]}</h3>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.postsList.posts,
  postsError: state.postsList.error,
  postsLoaded: state.postsList.loaded,
  viewData: getSlugId(state.categoriesState.categories),
  authors: getIdAuthor(state.membersState.members),
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
