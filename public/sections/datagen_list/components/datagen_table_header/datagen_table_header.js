import React from 'react';
import PropTypes from 'prop-types';
import { KuiThead } from '../../../../components/thead';
import { KuiTheadRow } from '../../../../components/thead_row';
import { SortableColumn } from '../../../../components/sortable_column';

export class DatagenTableHeader extends React.Component {
  getChildContext() {
    const {
      sortField,
      sortReverse
    } = this.props;

    return {
      sortField,
      sortReverse
    }
  }

  render = () => {
    const { onSortChange } = this.props;

    const columns = [
      { field: 'id', label: 'Id' },
      { field: 'definition.indexName', label: 'Index Name' },
      { field: 'definition.typeName', label: 'Type Name' },
      { field: 'definition.dateCreated', label: 'Date created' },
      { field: 'definition.dateLastRun', label: 'Date last run' }
    ].map(column => (
      <SortableColumn
        key={column.field}
        field={column.field}
        onClick={onSortChange}
      >
        {column.label}
      </SortableColumn>
    ));

    return (
      <KuiThead>
        <KuiTheadRow>
          <th className="kuiTableHeaderCell kuiTableHeaderCell--checkBox">
            <input type="checkbox" className="kuiCheckBox" />
          </th>
          {columns}
        </KuiTheadRow>
      </KuiThead>
    );
  }

  static propTypes = {
    sortField: PropTypes.string,
    sortReverse: PropTypes.bool,
    onSortChange: PropTypes.func
  }

  static childContextTypes = {
    sortField: PropTypes.string,
    sortReverse: PropTypes.bool
  }
}
