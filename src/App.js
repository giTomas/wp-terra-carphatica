import React, { Component } from 'react';
import WrappedDataLoader from './components/container/wrappedDataLoader';
import AppRouter from './components/router';

class App extends Component {
  render() {
    return (
      <WrappedDataLoader>
        <AppRouter />
      </WrappedDataLoader>
    );
  }
}


export default App;
