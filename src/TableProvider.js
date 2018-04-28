import React, { Component, createContext, forwardRef } from 'react';

const { Provider, Consumer } = createContext({
  sortBy: {},
  orderBy: 'asc',
  handleSortBy: () => {}
});
export { Consumer };

class TableProvider extends Component {
  constructor(props) {
    super(props);
    this.handleSortBy = this.handleSortBy.bind(this);
    this.state = {
      sortBy: props.defaultSortBy,
      orderBy: props.defaultOrderBy,
      handleSortBy: this.handleSortBy
    };
  }

  handleSortBy(newSortKey) {
    // have newSortKey to sort on
    // need sortBy from state in order to change it (if needed)
    // need orderBy from state to change it
    // also look for oldSortKey to change it back to false
    this.setState(prevState => {
      const newState = {
        ...prevState,
        orderBy: 'asc'
      };
      const oldSort = Object.keys(prevState.sortBy).filter(key => !!prevState.sortBy[key]); // should only be one
      if (oldSort.length === 1) {
        const oldSortKey = oldSort[0];

        if (newSortKey !== oldSortKey) { // new sort key
          newState.sortBy[oldSortKey] = false;
          newState.sortBy[newSortKey] = true;
          newState.orderBy = 'desc';
        } else { // old sort key, instead change order
          if (prevState.orderBy === 'asc') {
            newState.orderBy = 'desc';
          } else {
            newState.orderBy = 'asc';
          }
        }
        return newState;
      } else {
        return prevState;
      }
    }, () => console.log( 'Currently Sorting on', Object.keys(this.state.sortBy).filter(k => !!this.state.sortBy[k])[0] ));

    // TODO
    // }, this.props.onSortChange({
    //   sortBy: this.state.sortBy,
    //   orderBy: this.state.orderBy
    // }));
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
