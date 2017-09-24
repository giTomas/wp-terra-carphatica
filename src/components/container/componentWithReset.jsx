import React, { PureComponent } from 'react';

export default function ComponentWithReset(WrappedComponent) {
  return class extends PureComponent {
    componentWillUnmount() {
      this.props.resetResource();
    }

  render() {
    return <WrappedComponent {...this.props} />
    }
  }
}
