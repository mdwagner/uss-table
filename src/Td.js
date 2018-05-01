import React from 'react';

const Td = ({ children, ...props }) => (
  <td {...props}>
    {children}
  </td>
);

export default Td;
