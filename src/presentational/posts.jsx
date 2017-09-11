import React from 'react';
import { connect } from 'react-redux';
import { createMarkup } from '../helpers/';

const Posts = ({resource}) => (
  <div className="article">
    <h2 className="articleTitle">{resource.title}</h2>
    <div className="articleText" dangerouslySetInnerHTML={createMarkup(resource.content)} />
  </div>
);

const Blog = ({resources}) => (
  <div className="pageBg">

  </div>
);

export default Posts;
