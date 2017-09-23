import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Uvod from './presentational/uvod';
import WrappedPost from './container/wrappedPost';
import WrappedClen from './container/wrappedClen';
import WrappedPosts from './container/wrappedPosts';
import WrappedDataLoader from './container/wrappedDataLoader';

const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
);

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
            <Route path="/clenovia" component={Default} />
            <Route exact path="/blog" component={WrappedPosts} />
            <Route exact path="/blog/:slug" component={WrappedPost} />
            <Route path="/clenovia/:slug" component={WrappedClen} />
            {/* <Route exact path="/sekcie/:sekcia" component={Sekcia} />
            <Route exact path="/sekcie/priroda/:slug" component={WrappedClanok} />
            <Route exact path="/sekcie/historia/:slug" component={WrappedClanok} />
            <Route exact path="/sekcie/kultura/:slug" component={Default} />
            <Route exact path="/sekcie/ochrana-prirody/:slug" component={Default} /> */}
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </WrappedDataLoader>
    );
  }
}


export default App;
