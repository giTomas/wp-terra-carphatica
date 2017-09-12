import React from 'react';
import { createMarkup } from '../helpers/';
import PageNavigation from './navigation';

const Article = ({resource}) => (
  <div className="pageBgPosts">
    <PageNavigation />
    <div className="article">

      <h2 className="articleTitle">{resource.title}</h2>
      <div className="articleText" dangerouslySetInnerHTML={createMarkup(resource.content)} />
    </div>
</div>
)

export default Article;
