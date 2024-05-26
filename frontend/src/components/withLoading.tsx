import React from 'react';

interface WithLoadingProps {
  loading: boolean;
}

const withLoading = <P extends object>(Component: React.ComponentType<P>) => {
  return (props: WithLoadingProps & P) => {
    if (props.loading) {
      return <div>Loading...</div>;
    }
    return <Component {...props} />;
  };
};

export default withLoading;
