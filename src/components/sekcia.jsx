import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { catLoader } from '../actionCreators/category';
import { getIdAuthor, addData, createAction, createHash } from '../selectors/';

const CategoryList = ({name, category, categorySlug, authors}) => (
  <div className="category">
    <h2 className="category-name">Sekcia {name}</h2>
    {category.map(post => (
      <div className="categoryArticle" key={post.slug}>
        <Link to={`/sekcie/${categorySlug}/${post.slug}`}><h2 className="categoryArticle-title">{post.title}</h2></Link>
        <p className="categoryArticle-date">{post.date}</p>
        <h3 className="categoryArticle-author">{authors[post.author]}</h3>
      </div>
    ))}
  </div>
);

class Sekcia extends Component {

  async componentDidMount() {

    if (!this.props[this.props.hash].success) {
      this.props.fetch(
        this.props.action,
        this.props.data.id,
      )
    }
  }

  render() {
    return (
      <CategoryList
        name={this.props.data.name}
        category={this.props[this.props.hash].data}
        categorySlug={this.props.match.params.sekcia}
        authors={this.props.authors}/>
    )
  }
}

const mapStateToProps = (state, props) => ({
  hash: createHash(state, props),
  authors: getIdAuthor(state.members.data),
  data: addData(state, props),
  action: createAction(state, props),
  historia: state.sekcie.historia,
  priroda: state.sekcie.priroda,
  ochrana: state.sekcie.ochrana,
  kultura: state.sekcie.kultura,
});

const mapDispatchToProps = dispatch => ({
  fetch: (category, id) => dispatch(catLoader(category, id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sekcia);
