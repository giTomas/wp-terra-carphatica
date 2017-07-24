import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
} from 'react-router-dom';
// import { RouteTransition } from 'react-router-transition';
import Uvod from './components/uvod';
import Sekcia from './components/sekcia';
import DataLoader from './components/dataLoader';
import Clanok from './components/clanok';
import Clen from './components/clen';


const Default = ({match}) => (
  <div>
    <h3>{(match.url).toUpperCase()}</h3>
  </div>
);

class App extends Component {
  render() {
    return (
      <DataLoader>
        <Router>
          <Switch>
            <Route exact path="/" component={Uvod} />
            <Route path="/o-nas" component={Default} />
            <Route path="/stanovy" component={Default} />
            <Route path="/kontakt" component={Default} />
            <Route path="/clenovia/:clen" component={Clen} />
            <Route exact path="/sekcie/:sekcia" component={Sekcia} />
            <Route exact path="/sekcie/priroda/:clanok" component={Clanok} />
            <Route exact path="/sekcie/historia/:clanok" component={Clanok} />
            <Route exact path="/sekcie/kultura/:clanok" component={Default} />
            <Route exact path="/sekcie/ochrana-prirody/:clanok" component={Default} />
          </Switch>
        </Router>
      </DataLoader>
    );
  }
}


export default App;
