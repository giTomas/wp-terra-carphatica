import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { createMarkup } from '../helpers/';
import {
  articleReset,
  articleLoader,
} from '../actionCreators/article';
import { getIdAuthor } from '../selectors/';



const Article = ({article}) => (
  <div>
    <h2>{article.title}</h2>
    <div dangerouslySetInnerHTML={createMarkup(article.content)} />
  </div>
)

class Clanok extends Component {

  async componentDidMount() {
    this.props.fetchArticle(this.props.match.params.slug);
  }

  componentWillUnmount() {
    this.props.articleReset();
  }

  render() {
    return (
      <Article article={this.props.article}/>
    )
  }
}

const mapStateToProps = (state, props) => ({
  authors: getIdAuthor(state.members.data),
  article: state.article.data,
  // data: addArticle(state, props),
});

const mapDispatchToProps = dispatch => ({
  articleReset: () => {
    dispatch(articleReset());
  },
  fetchArticle: (id) => dispatch(articleLoader(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Clanok);
