import React, { Component } from 'react';
import styled from 'styled-components';
// import R from 'ramda';
import { connect } from 'react-redux';
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  Link,
  NavLink,
} from 'react-router-dom';
import {
  fetchMembers,
  fetchWithHeaders,
} from '../http/fetch'
import {
  membersLoaded,
  membersError,
} from '../actionCreators/actionCreators';

// const Navigation = styled.nav`
//
// `;
const NavigationList = styled.ul`
  list-style-type: none;
  display: flex;
`;
const NavigationListItem = styled.li`

`;
const NavigationLink = styled(NavLink)`
  font-family: var(--quicksand);
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
      <NavigationLink to="/stanovy">Stanovy</NavigationLink>
    </NavigationList>
  </NavigationList>
)
const image1 = 'http://localhost/wp-content/uploads/2017/07/hero_karpaty.jpg';
const image2 = 'http://localhost/wp-content/uploads/2017/07/hero_karpaty2.jpg'

const Header = styled.header`
  background-image: url(${image1});
  position: relative;
  height: 75vh;
  background-position: 0 -100px;
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  flex-wrap: wrap;
  ${'' /* align-items: flex-start; */}
  align-content: flex-end;
  &:before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,0.75);
    z-index: 200;
  }
`;

const PageTitle = styled.h1`
  ${'' /* margin-top: 1em; */}
  width: 100%;
  font-size: 6em;
  font-weight: 400;
  color: white;
  text-align: center;
  ${'' /* align-self: flex-end; */}
  ${'' /* background-color: rgba(0,0,0,0.1) */}
  @media(max-width: 500px) {
    font-size: 3em;
  }
`;

class Uvod extends Component {
  // constructor(props) {
  //   super(props);
  // }

  async componentDidMount() {

    if (this.props.members.loaded) {
      return;
    }

    try {
      const members = await fetchMembers();
      const headers = await fetchWithHeaders('2');
      this.props.membersLoaded(members)
      console.log(this.props.members.data)
      console.log(headers);
    }
    catch (err) {
      this.props.membersError(err.message)
    }
  }

  render() {
    return (
      <div>
        <Header>
          <PageTitle>Terra Carpahtica</PageTitle>
          <Navigation />
        </Header>
        {this.props.members.data.map(member => (
          <figure key={member.slug} >
            <img src={member.image} alt={member.name}/>
            <figcaption><Link className="member__link" to={`/clenovia/${member.slug}`}>{member.name}</Link></figcaption>
          </figure>
        ))}
      </div>
    )
  }
};

const mapStateToProps = state => ({
  members: {
    data: state.membersState.members,
    loaded: state.membersState.loaded,
    error: state.membersState.error,
  }
})

const mapDispatchToProps = dispatch => ({
  membersLoaded: (members) => {
    dispatch(membersLoaded(members))
  },
  membersError: (errMsg) => {
    dispatch(membersError(errMsg))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Uvod);
