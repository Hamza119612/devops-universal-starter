import React, { ReactNode } from 'react';

interface RenderPropComponentProps {
  render: () => ReactNode;
}

const RenderPropComponent: React.FC<RenderPropComponentProps> = ({ render }) => {
  return <div>{render()}</div>;
};

export default RenderPropComponent;
