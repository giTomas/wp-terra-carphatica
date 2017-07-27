// import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { createMarkup } from '../helpers/';
import {
  articleReset,
  articleLoader,
} from '../actionCreators/article';
import { getIdAuthor } from '../selectors/';
import  Article from '../presentational/clanok';
import ComponentWithLoading from './componentWithLoading';

const WrappedClanok = ComponentWithLoading(Article);

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
)(WrappedClanok);
