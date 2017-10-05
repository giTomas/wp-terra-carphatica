import React from 'react';
import PropTypes from 'prop-types';
import { createMarkup } from '../../helpers/';
import PageNavigation from './navigation';

// const

const Article = ({resource}) => (
  <div className="articleBg">
    <PageNavigation />
    <article className="articleWrapper">
      <div className="articleContainer">
        <h2 className="articleTitle">{resource.title}</h2>
      </div>
      <div className="articleContainer" dangerouslySetInnerHTML={createMarkup(resource.content)} />
    </article>
</div>
)

Article.propTypes = {
  resource: PropTypes.objectOf(PropTypes.string)
}

export default Article;
