import React, { PureComponent } from 'react';
import { map } from 'ramda';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="pageHeader">
    <div className="pageTitle">
      <h1>Terra Carphatica</h1>
    </div>
    <nav className="navigation">
      <ul className="navigationList">
        <li className="navigationItem">
          <Link className="navigationLink" to="/">Úvod</Link>
        </li>
        <li className="navigationItem">
          <Link className="navigationLink" to="/o-nas">O nás</Link>
        </li>
        <li className="navigationItem">
          <a className="navigationLink" href="http://localhost/wp-content/uploads/2017/07/stanovy.pdf">Stanovy</a>
        </li>
      </ul>
    </nav>
  </header>
);

const Section = (content) => (
  <div key={content.slug} className="section">
    <Link to={`/sekcie/${content.slug}`}>{content.name}</Link>
  </div>
)

class Uvod extends PureComponent {

  render() {
    return (
      <div>
        <Header />
        <section className="sections">
          {map(Section, this.props.categories.data)}
        </section>
        <section className="sections">
          {this.props.members.data.map(member => (
            <figure key={member.slug} >
              <img src={member.image} alt={member.name}/>
              <figcaption><Link className="member__link" to={`/clenovia/${member.slug}`}>{member.name}</Link></figcaption>
            </figure>
        ))}
        </section>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  members: {
    data: state.members.data,
    loading: state.members.loading,
    error: state.members.error,
    success: state.members.success,
  },
  categories: {
    data: state.categories.data,
    loading: state.categories.loading,
    error: state.categories.error,
    success: state.categories.success,
  }
});

export default connect(
  mapStateToProps,
)(Uvod);
