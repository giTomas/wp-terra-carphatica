import React, { PureComponent } from 'react';

export default function ComponentWithLoading(WrappedComponent) {
  return class extends PureComponent {
    async componentDidMount() {
      this.props.fetchResource(this.props.match.params.slug);
    }
    componentWillUnmount() {
      this.props.resetResource();
    }

  render() {
    return <WrappedComponent {...this.props} />
    }
  }
}
