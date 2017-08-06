import React from 'react';
import { Link } from 'react-router-dom';

const Uvod = () => (
  <div className="pageBg">
    <div className="pageBgImage" />
    <div className="pageBgOverlay">
      <header className="pageHeader">
        <h1 className="pageTitle">Terra Carphatica</h1>
        <nav className="nav">
          <ul className="pageNavList">
            <li className="pageNavItem">
              <span className="arrow">-></span>
              <Link className="navLink" to="/blog">Blog</Link>
            </li>
            <li className="pageNavItem">
              <span className="arrow">-></span>
              <Link className="navLink" to="/stanovy">Stanovy</Link>
            </li>
            <li className="pageNavItem">
              <span className="arrow">-></span>
              <Link className="navLink" to="/clenovia">Členovia</Link>
            </li>
            <li className="pageNavItem">
              <span className="arrow">-></span>
              <Link className="navLink" to="/o-nas">O nás</Link>
            </li>
            <li className="pageNavItem">
              <span className="arrow">-></span>
              <Link className="navLink" to="/kontakt">Kontakt</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  </div>
);

export default Uvod;
