import React from "react";

const withDataFetching = (props) => (WrappedComponent) => {
  class WithDataFetching extends React.Component {

    render() {
      const { results, loading, error } = this.state;

      return (
        <WrappedComponent
          results={results}
          loading={loading}
          error={error}
          {...this.props}
        />
      );
    }
  }

  return WithDataFetching;
};

export default withDataFetching;
