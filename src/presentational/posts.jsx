import React from 'react';
import { map } from 'ramda';
// import { connect } from 'react-redux';
import { createMarkup } from '../helpers/';
import { Link } from 'react-router-dom';
import PageNavigation from './navigation';

// const Posts = ({resource}) => (
//   <div className="article">
//     <h2 className="articleTitle">{resource.title}</h2>
//     <div className="articleText" dangerouslySetInnerHTML={createMarkup(resource.content)} />
//   </div>
// );
//
// const Blog = ({resources}) => (
//   <div className="pageBg">
//
//   </div>
// );

const Post =  ({thumb,excerpt,date,slug,author,title}) => (
    <li className="post" key={slug}>
      <Link className="postHoverGroup" to={`/blog/${slug}`}>

        {thumb && <figure className="postFigure"><img className="postImage" src={thumb} alt=''/></figure>}
        <h3 className="postTitle">{title}</h3>
      </Link>
      <div className="postDataGroup">
        <h4 className="postAuthor">{author}</h4>
        <h4 className="postDate">{date}</h4>
      </div>
      <p className="postExcerpt">{excerpt}</p>

    </li>
);

const Posts = ({resource}) => (
  <div className="pageBgPosts">
    <PageNavigation />
    <ul className="l-wide postsContainer">
      {map(Post, resource)}
    </ul>
  </div>
);

export default Posts;
