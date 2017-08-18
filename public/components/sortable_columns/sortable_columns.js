import React from 'react';
import PropTypes from 'prop-types';

export class SortableColumns extends React.Component {
  render = () => {
    return (
      {children}
    )
  }

  static propTypes = {
    children: PropTypes.object,
    sortField: PropTypes.string,
    sortReverse: PropTypes.bool,
    onSortChange: PropTypes.func
  }
}
