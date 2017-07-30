import React from 'react';
// import { map } from 'ramda';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// const Header = () => (
//   <header className="pageHeader">
//     <div className="pageTitle">
//       <h1>Terra Carphatica</h1>
//     </div>
//     <nav className="navigation">
//       <ul className="navigationList">
//         <li className="navigationItem">
//           <Link className="navigationLink" to="/">Úvod</Link>
//         </li>
//         <li className="navigationItem">
//           <Link className="navigationLink" to="/o-nas">O nás</Link>
//         </li>
//         <li className="navigationItem">
//           <a className="navigationLink" href="http://localhost/wp-content/uploads/2017/07/stanovy.pdf">Stanovy</a>
//         </li>
//       </ul>
//     </nav>
//   </header>
// );

const Uvod = () => (
  <div className="pageWrapper">
    <div className="backgroundImage" />
    <div className="backroundOverlay">
      <header className="pageHeader">
        <h1 className="pageTitle">Terra Carphatica</h1>
        <nav className="pageNav">
          <ul className="navList">
            <li className="navItem">
              <span clasName="arrow">-></span>
              <Link className="navLink" to="/blog">Blog</Link>
            </li>
            <li className="navItem">
              <span clasName="arrow">-></span>
              <Link className="navLink" to="/blog">Stanovy</Link>
            </li>
            <li className="navItem">
              <span clasName="arrow">-></span>
              <Link className="navLink" to="/blog">O nás</Link>
            </li>
            <li className="navItem">
              <span clasName="arrow">-></span>
              <Link className="navLink" to="/blog">Kontakt</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  </div>
);

export default Uvod;

// const Section = (content) => (
//   <div key={content.slug} className="section">
//     <Link to={`/sekcie/${content.slug}`}>{content.name}</Link>
//   </div>
// )

// const Uvod = ({members, categories}) => (
//   <div className="page">
//     <Header2 />
//     <section className="sections">
//       {map(Section, categories.data)}
//     </section>
//     <section className="sections">
//       {members.data.map(member => (
//         <figure key={member.slug} >
//           <img src={member.image} alt={member.name}/>
//           <figcaption><Link className="member__link" to={`/clenovia/${member.slug}`}>{member.name}</Link></figcaption>
//         </figure>
//     ))}
//     </section>
//   </div>
// );
//
// const mapStateToProps = state => ({
//   members: state.members,
//   categories: state.categories,
// });
//
// export default connect(
//   mapStateToProps,
// )(Uvod);
