import React, { forwardRef } from 'react';
import { Consumer } from './TableProvider';

const Th = ({
  className,
  children,
  sortKey,
  determineClassNames,
  tableContext,
  ...props
}) => {
  const classes = [className || ''];

  if (determineClassNames && typeof determineClassNames === 'function') {
    classes.push(determineClassNames({...tableContext, sortKey}));
  }

  return (
    <th {...props}
      className={classes.join(' ')}
      onClick={(e) => {
        e.preventDefault();
        sortKey && tableContext.handleSortBy(sortKey);
      }}>
      {children}
    </th>
  );
}

export default forwardRef((props, ref) => (
  <Consumer>
    {tableContext => (
      <Th {...props} ref={ref} tableContext={tableContext} />
    )}
  </Consumer>
));
