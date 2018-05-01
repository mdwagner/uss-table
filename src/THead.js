import React from 'react';

const THead = ({ children, ...props }) => (
  <thead {...props}>
    {children}
  </thead>
);

export default THead;
