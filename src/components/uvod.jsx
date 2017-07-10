import React, { Component } from 'react';
import styled from 'styled-components';
import { map } from 'ramda';
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
  fetchCategories,
  fetchCategory,
} from '../http/fetch'
import {
  membersLoaded,
  membersError,
} from '../actionCreators/members';
import {
  categoriesLoaded,
  categoriesError,
  categoryId,
} from '../actionCreators/categories';

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
  font-weight: 400;
  color: white;
  text-align: center;
  ${'' /* align-self: flex-end; */}
  ${'' /* background-color: rgba(0,0,0,0.1) */}
  @media(max-width: 500px) {
    font-size: 3em;
  }
`;

const Section = (content) => (
  <div key={content.slug} className="section">
    <Link to={`/sekcie/${content.slug}`}>{content.name}</Link>
  </div>
)

class Uvod extends Component {
  // constructor(props) {
  //   super(props);
  // }

  async componentDidMount() {

    if (this.props.members.loaded) {
      return;
    }

    try {
      // const members = await fetchMembers();
      const [members, categories] = await Promise.all([fetchMembers(), fetchCategories()]);
      this.props.membersLoaded(members);
      this.props.categoriesLoaded(categories);
      // console.log(this.props.members.data);

    }
    catch (err) {
      this.props.membersError(err.message);
      this.props.categoriesError(err.message);
      // console.log(this.props.membersState.error)
    }
    // this.props.categoryId('priroda');
    // console.log(this.props.categories.categoryToLoad)
    // const posts = await fetchCategory(this.props.categories.categoryToLoad.id)

  }

  render() {
    return (
      <div>
        <Header>
          <PageTitle>Terra Carpahtica</PageTitle>
          <Navigation />
        </Header>
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
    data: state.membersState.members,
    loaded: state.membersState.loaded,
    error: state.membersState.error,
  },
  categories: {
    data: state.categoriesState.categories,
    loaded: state.categoriesState.loaded,
    error: state.categoriesState.error,
    categoryToLoad: state.categoriesState.categoryToLoad,
  }
})

const mapDispatchToProps = dispatch => ({
  membersLoaded: (members) => {
    dispatch(membersLoaded(members))
  },
  membersError: (errMsg) => {
    dispatch(membersError(errMsg))
  },
  categoriesLoaded: (categories) => {
    dispatch(categoriesLoaded(categories))
  },
  categoriesError: (errMsg) => {
    dispatch(categoriesError(errMsg))
  },
  categoryId: (slug) => {
    dispatch(categoryId(slug))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Uvod);
