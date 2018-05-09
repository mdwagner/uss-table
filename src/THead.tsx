import React, { ReactNode, SFC } from 'react';

interface THeadProps {
  children?: ReactNode;
  [x: string]: ReactNode;
}

const THead: SFC<THeadProps> = ({ children = null, ...props }) => (
  <thead {...props}>
    {children}
  </thead>
);

export default THead;
