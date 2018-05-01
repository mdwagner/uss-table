import React from 'react';

const TBody = ({ children, ...props }) => (
  <tbody {...props}>
    {children}
  </tbody>
);

export default TBody;
