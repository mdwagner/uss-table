import React from 'react';

const Tr = ({ children, ...props }) => (
  <tr {...props}>
    {children}
  </tr>
);

export default Tr;
