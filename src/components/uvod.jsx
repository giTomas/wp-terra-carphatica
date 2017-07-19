import React, { Component } from 'react';
import styled from 'styled-components';
import { map } from 'ramda';
import { connect } from 'react-redux';
import {
  Link,
  NavLink,
} from 'react-router-dom';

const NavigationList = styled.ul`
  list-style-type: none;
  display: flex;
`;

const NavigationLink = styled(NavLink)`
  color: white;
  text-decoration: none;
`;

const Navigation = () => (
  <NavigationList>
    <NavigationList>
      <NavigationLink to="/">Úvod</NavigationLink>
    </NavigationList>
    <NavigationList>
      <NavigationLink to="/o-nas">O nás</NavigationLink>
    </NavigationList>
    <NavigationList>
      <a href="http://localhost/wp-content/uploads/2017/07/stanovy.pdf">Stanovy</a>
    </NavigationList>
  </NavigationList>
)

const Header = () => (
  <header className="pageHeader">
    <h1 className="pageTitle">Terra Carphatica</h1>
    <Navigation />
  </header>
);

const Section = (content) => (
  <div key={content.slug} className="section">
    <Link to={`/sekcie/${content.slug}`}>{content.name}</Link>
  </div>
)

class Uvod extends Component {

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
