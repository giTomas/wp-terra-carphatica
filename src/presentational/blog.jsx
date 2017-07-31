import React from 'react';
import { createMarkup } from '../helpers/';

const Article = ({resource}) => (
  <div className="article">
    <h2 className="articleTitle">{resource.title}</h2>
    <div className="articleText" dangerouslySetInnerHTML={createMarkup(resource.content)} />
  </div>
)

export default Article;
