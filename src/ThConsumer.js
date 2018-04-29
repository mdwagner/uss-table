import React, { Component, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './TableProvider';

class Th extends Component {
  static propTypes = {
    className: PropTypes.string,
    handleClassNames: PropTypes.func,
    sortKey: PropTypes.string.isRequired,
    tableContext: PropTypes.shape({
      sortBy: PropTypes.string.isRequired,
      orderBy: PropTypes.string.isRequired,
      handleClassNames: PropTypes.func.isRequired,
      handleSortBy: PropTypes.func.isRequired
    }).isRequired
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    const { tableContext, sortKey } = this.props;
    evt.preventDefault();
    tableContext.handleSortBy(sortKey);
  }

  render() {
    const {
      children,
      className,
      handleClassNames,
      sortKey,
      tableContext,
      ...rest
    } = this.props;

    const cssClasses = [className || ''];
    const handler = handleClassNames || tableContext.handleClassNames;

    const newClasses = handler({
      sortBy: tableContext.sortBy,
      orderBy: tableContext.orderBy,
      sortKey
    });
    if (typeof newClasses === 'string') {
      cssClasses.push(newClasses);
    } else {
      console.error('Invalid Return Type', typeof newClasses);
    }
    const classes = cssClasses.filter(val => !!val).join(' ');

    return (
      <th {...rest}
        className={classes}
        onClick={this.handleClick}>
        {children}
      </th>
    );
  }
}

export default forwardRef((props, ref) => (
  <Consumer>
    {tableContext => (
      <Th {...props} ref={ref} tableContext={tableContext} />
    )}
  </Consumer>
));
