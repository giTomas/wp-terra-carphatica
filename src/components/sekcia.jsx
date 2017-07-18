import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  categoryLoader,
  categoryReset,
  catLoader,
} from '../actionCreators/category';
import { getIdAuthor, addData, createAction } from '../selectors/';

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
    this.props.fetchCategory(this.props.data.id);
    this.props.fetch(
      this.props.action,
      this.props.data.id,
    )
  }

  componentWillUnmount() {
    this.props.categoryReset();

  }

  render() {
    return (
      <CategoryList
        name={this.props.data.name}
        category={this.props.category}
        categorySlug={this.props.match.params.sekcia}
        authors={this.props.authors}/>
    )
  }
}

const mapStateToProps = (state, props) => ({
  authors: getIdAuthor(state.members.data),
  category: state.category.data,
  data: addData(state, props),
  action: createAction(state, props),
  history: state.history.data,
  nature: state.nature.data,
  natureProtection: state.natureProtection.data,
  culture: state.culture.data,
});

const mapDispatchToProps = dispatch => ({
  categoryReset: () => {
    dispatch(categoryReset());
  },
  fetchCategory: (id) => dispatch(categoryLoader(id)),
  fetch: (category, id) => dispatch(catLoader(category, id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sekcia);
