import React, { forwardRef } from 'react';
import { Consumer } from './TableProvider';

export default function withTable(Component) {
  return forwardRef((props, ref) => (
    <Consumer>
      {tableContext => <Component {...props} ref={ref} table={tableContext} />}
    </Consumer>
  ));
}
