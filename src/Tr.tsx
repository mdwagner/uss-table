import React, { ReactNode, SFC } from 'react';

interface TrProps {
  children?: ReactNode;
  [x: string]: ReactNode;
}

const Tr: SFC<TrProps> = ({ children = null, ...props }) => (
  <tr {...props}>
    {children}
  </tr>
);

export default Tr;
