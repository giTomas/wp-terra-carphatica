import React, { Component } from 'react';
// import styled from 'styled-components';
// import R from 'ramda';
// import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
} from 'react-router-dom';
// import { RouteTransition } from 'react-router-transition';
import Uvod from './components/uvod';


const Default = ({match}) => (
  <div>
    <h3>{(match.url).toUpperCase()}</h3>
  </div>
);

// const AppHeader = styled.header`
//
// `;


const AppShell = ({children}) => (
  <div>
    {children}
    <h2>Nasa stranka</h2>
  </div>
);


class App extends Component {
  render() {
    return (
    <Router>
      <AppShell>



        <Switch>
          <Route exact path="/" component={Uvod} />
          <Route path="/o-nas" component={Default} />
          <Route path="/stanovy" component={Default} />
          <Route path="/kontakt" component={Default} />
          <Route path="/clenovia/:clen" component={Default} />
          <Route path="/priroda/:clanok" component={Default} />
          <Route path="/historia/:clanok" component={Default} />
          <Route path="/kultura/:clanok" component={Default} />
          <Route path="/ochrana-prirody/:clanok" component={Default} />
        </Switch>

      </AppShell>
    </Router>
    );
  }
}




export default App;
