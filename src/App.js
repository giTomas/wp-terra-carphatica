import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
// import { RouteTransition } from 'react-router-transition';
import Uvod from './components/uvod';
import Sekcia from './components/sekcia';
import WrappedClanok from './container/wrappedClanok';
import WrappedClen from './container/wrappedClen';
import WrappedDataLoader from './container/wrappedDataLoader';


const Default = ({match}) => (
  <div>
    <h3>{(match.url).toUpperCase()}</h3>
  </div>
);

class App extends Component {
  render() {
    return (
      <WrappedDataLoader>
        <Router>
          <Switch>
            <Route exact path="/" component={Uvod} />
            <Route path="/o-nas" component={Default} />
            <Route path="/stanovy" component={Default} />
            <Route path="/kontakt" component={Default} />
            <Route path="/clenovia/:slug" component={WrappedClen} />
            <Route exact path="/sekcie/:sekcia" component={Sekcia} />
            <Route exact path="/sekcie/priroda/:slug" component={WrappedClanok} />
            <Route exact path="/sekcie/historia/:slug" component={WrappedClanok} />
            <Route exact path="/sekcie/kultura/:slug" component={Default} />
            <Route exact path="/sekcie/ochrana-prirody/:slug" component={Default} />
          </Switch>
        </Router>
      </WrappedDataLoader>
    );
  }
}


export default App;
