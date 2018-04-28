import React, { Component, createContext, forwardRef } from 'react';
import PropTypes from 'prop-types';

const { Provider, Consumer } = createContext({
  sortBy: 'sort',
  orderBy: 'order',
  handleSortBy: () => {},
  handleClassNames: () => {}
});
export { Consumer };

class TableProvider extends Component {
  static propTypes = {
    className: PropTypes.string,
    defaultHandleClassNames: PropTypes.func,
    defaultOrderBy: PropTypes.string.isRequired,
    defaultSortBy: PropTypes.string.isRequired,
    onSortChange: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.handleSortBy = this.handleSortBy.bind(this);

    this.state = {
      sortBy: props.defaultSortBy,
      orderBy: props.defaultOrderBy,
      handleSortBy: this.handleSortBy,
      handleClassNames: props.defaultHandleClassNames || (() => (''))
    };
  }

  handleSortBy(newSortBy) {
    if (typeof newSortBy !== 'string') {
      console.error('Invalid Type', typeof newSortBy);
      return;
    }

    this.setState(
      ({ sortBy: oldSortBy, orderBy: oldOrderBy }) => {
        if (newSortBy !== oldSortBy) {
          // new sort by
          const orderBy = this.props.defaultOrderBy;
          return {
            sortBy: newSortBy,
            orderBy
          };
        } else {
          // same sort by, change order by
          const orderBy = oldOrderBy === 'asc' ? 'desc' : 'asc';
          return {
            orderBy
          };
        }
      },
      () => {
        if (this.props.onSortChange) {
          this.props.onSortChange({
            sortBy: this.state.sortBy,
            orderBy: this.state.orderBy
          });
        }
      }
    );
  }

  render() {
    const { forwardedRef } = this.props;
    return (
      <Provider value={this.state}>
        <table ref={forwardedRef} className={this.props.className}>
          {this.props.children}
        </table>
      </Provider>
    );
  }
}

export default forwardRef((props, ref) => (
  <TableProvider {...props} forwardedRef={ref} />
));
