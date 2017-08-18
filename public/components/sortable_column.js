import React from 'react';
import PropTypes from 'prop-types';

export class SortableColumn extends React.Component {
  render = () => {
    const {
      children,
      field,
      onClick
    } = this.props;
    const {
      sortField,
      sortReverse
    } = this.context;

    const arrowClass = sortReverse ? 'fa-long-arrow-down' : 'fa-long-arrow-up';
    const sortClasses = `kuiTableSortIcon kuiIcon ${arrowClass}`;

    return (
      <th
        className="kuiTableHeaderCell kuiTableHeaderCell--sortable"
        onClick={() => { onClick(field); }}
      >
        <div className="kuiTableHeaderCell__liner">
          {children}
        </div>
        {(sortField === field) && (
          <span className={sortClasses}></span>
        )}
      </th>
    );
  }

  static propTypes = {
    field: PropTypes.string,
    onClick: PropTypes.func
  }

  static contextTypes = {
    sortField: PropTypes.string,
    sortReverse: PropTypes.bool
  }
}
