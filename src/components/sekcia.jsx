import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { map, curry, compose } from 'ramda';
import { Link } from 'react-router-dom';
import { catLoader } from '../actionCreators/category';
import { getIdAuthor, addData, createAction, createHash } from '../selectors/';


const articleListItem = (post) => (
  <li className="articleItem" key={post.slug}>
    <Link to={`/sekcie/${post.categorySlug}/${post.slug}`}><h3 className="articleItemTitle">{post.title}</h3></Link>
    <date className="articleItemDate">{post.date}</date>
    <h4 className="articleItemAuthor">{post.author}</h4>
  </li>
);

const CategoryList = ({name, list}) => (
  <article className="category">
    <header><h2 className="categoryName">Sekcia {name}</h2></header>
    <ul className="articleList">
      {map(articleListItem, list)}
    </ul>
  </article>
);
const CategoryList2 = (name, list) => (
  <article className="category">
    <header><h2 className="categoryName">Sekcia {name}</h2></header>
    <ul className="articleList">
      {map(articleListItem, list)}
    </ul>
  </article>
);

const curriedCategoryList = curry(CategoryList2);

const addToObj = curry((categorySlug, authors, obj) => ({
  ...obj,
  author: authors[obj.author],
  categorySlug,
}));



class Sekcia extends PureComponent {

  async componentDidMount() {

    if (!this.props[this.props.hash].success) {
      this.props.fetch(
        this.props.action,
        this.props.data.id,
      )
    }
  }

  render() {

    const addAuthSlug = addToObj(
      this.props.match.params.sekcia,
      this.props.authors
    );
    // const listOfArticles = map(addAuthSlug, this.props[this.props.hash].data);

    const listComposed = compose(
      curriedCategoryList(this.props.data.name),
      map(addAuthSlug),
    )

    return (
      // <CategoryList
      //   name={this.props.data.name}
      //   list={listOfArticles}
      // />
    <div className="wrapper">
      {listComposed(this.props[this.props.hash].data)}
    </div>
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
