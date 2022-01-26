import React, { Component } from "react";

type Props = {};

type State = {
  hasError: boolean;
};

class ErrorBoundry extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1> Opps. That isn't good</h1>;
    } else {
      return <div>{this.props.children}</div>;
    }
  }
}

export default ErrorBoundry;
