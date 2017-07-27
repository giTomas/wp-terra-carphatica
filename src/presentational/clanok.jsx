import React from 'react';
import { createMarkup } from '../helpers/';

const Article = ({resource}) => (
  <div>
    <h2>{resource.title}</h2>
    <div dangerouslySetInnerHTML={createMarkup(resource.content)} />
  </div>
)

export default Article;
