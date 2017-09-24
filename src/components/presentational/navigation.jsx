import React from 'react';
import { Link } from 'react-router-dom';

const PageNavigation = () => (
  <div className="navHeaderContainer">
    <div className="navHeaderContent l-wide">
      <h1 className="navHeaderTitle">Terra Carpahtica</h1>
      <nav>
        <ul className="navList">
          <li className="navItem">
            <Link className="pageNavLink" to="/">Úvod</Link>
          </li>
          <li className="navItem">
            <Link className="pageNavLink" to="/blog">Blog</Link>
          </li>
          <li className="navItem">
            <Link className="pageNavLink" to="/o-nas">O nás</Link>
          </li>
          <li className="navItem">
            <Link className="pageNavLink" to="/clenovia">Členovia</Link>
          </li>
          <li className="navItem">
            <Link className="pageNavLink" to="/stanovy">Stanovy</Link>
          </li>
          <li className="navItem">
            <Link className="pageNavLink" to="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default PageNavigation;

// const Navigation = ({children}) => (
//   <div className="pageBg">
//
//   <div>
// );
