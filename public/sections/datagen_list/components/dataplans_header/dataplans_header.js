import React from 'react';
import PropTypes from 'prop-types';
import { ALIGNMENTS } from '../../../../../common/constants';
import {
  KuiCheckbox,
  KuiTableHeader,
  KuiTableheadRow,
  KuiTableHeaderCell,
  KuiTableHeaderCellCheckbox
} from 'ui_framework/components';

export class DataplansHeader extends React.Component {
  render = () => {
    const {
      sortField,
      sortReverse,
      onSort
    } = this.props;

    const columnHeaders = [
      {
        id: 'checkbox',
        isCheckbox: true,
        width: '20px',
      },
      {
        id: 'id',
        label: 'Id',
        isSortable: true,
        alignment: ALIGNMENTS.LEFT_ALIGNMENT
      },
      {
        id: 'definition.indexName',
        label: 'Index Name',
        isSortable: true,
        alignment: ALIGNMENTS.LEFT_ALIGNMENT
      },
      {
        id: 'definition.typeName',
        label: 'Type Name',
        isSortable: true,
        alignment: ALIGNMENTS.LEFT_ALIGNMENT
      },
      {
        id: 'definition.dateCreated',
        label: 'Date created',
        isSortable: true,
        alignment: ALIGNMENTS.LEFT_ALIGNMENT
      },
      {
        id: 'definition.dateLastRun',
        label: 'Date last run',
        isSortable: true,
        alignment: ALIGNMENTS.LEFT_ALIGNMENT
      }
    ].map(column => {
      if (column.isCheckbox) {
        return (
          <KuiTableHeaderCellCheckbox
            key={column.id}
            width={column.width}
          >
            <KuiCheckbox
              id="selectAllCheckbox"
              checked={this.areAllItemsSelected()}
              onChange={this.toggleAll}
              alternateStyle
            />
          </KuiTableHeaderCellCheckbox>
        );
      }

      return (
        <KuiTableHeaderCell
          key={column.id}
          align={column.alignment}
          width={column.width}
          onSort={column.isSortable ? () => { onSort(column.id) } : undefined}
          isSorted={sortField === column.id}
          isSortAscending={sortField === column.id && sortReverse}
        >
          {column.label}
        </KuiTableHeaderCell>
      );
    });

  //   <KuiTableHeaderCell
  //   key={column.id}
  //   align={column.alignment}
  //   width={column.width}
  //   onSort={column.isSortable ? () => { this.onSort(column.id) } : undefined}
  //   isSorted={this.state.sortedColumn === column.id}
  //   isSortAscending={this.sortableProperties.isAscendingByName(column.id)}
  // >
  //   {column.label}
  // </KuiTableHeaderCell>

    return (
      <KuiTableHeader>
        {columnHeaders}
      </KuiTableHeader>
    );
  }

  areAllItemsSelected = () => {
    return true;
  }

  toggleAll = () => {
    console.log('toggling all');
  }

  static propTypes = {
    sortField: PropTypes.string,
    sortReverse: PropTypes.bool,
    onSort: PropTypes.func
  }
}
