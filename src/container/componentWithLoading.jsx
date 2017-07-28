import React, { PureComponent } from 'react';

export default function ComponentWithLoading(WrappedComponent) {
  return class extends PureComponent {
    async componentDidMount() {
      if (this.props.match) {
        this.props.fetchResource(this.props.match.params.slug);
      }
      else {
        this.props.fetchResource();
      }
    }

  render() {
    return <WrappedComponent {...this.props} />
    }
  }
}
