import React from "react";

export class ErrorBoundary extends React.Component {
  state = { hasError: false };

  // eslint-disable-next-line no-unused-vars
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // eslint-disable-next-line react/prop-types
      return this.props.fallback;
    }

    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}