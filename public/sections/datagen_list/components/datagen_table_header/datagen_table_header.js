import React from 'react';
import PropTypes from 'prop-types';
import {
  KuiThead,
  KuiTheadRow,
  SortableColumn
} from 'plugins/datagenreact/components';

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

    return (
      <KuiThead>
        <KuiTheadRow>
          <th className="kuiTableHeaderCell kuiTableHeaderCell--checkBox">
            <input type="checkbox" className="kuiCheckBox" />
          </th>
          <SortableColumn
            field="id"
            onClick={onSortChange}
          >
            Id
          </SortableColumn>
          <SortableColumn
            field="indexName"
            onClick={onSortChange}
          >
          Index Name
          </SortableColumn>
          <SortableColumn
            field="typeName"
            onClick={onSortChange}
          >
          Type Name
          </SortableColumn>
          <SortableColumn
            field="dateCreated"
            onClick={onSortChange}
          >
          Date created
          </SortableColumn>
          <SortableColumn
            field="dateLastRun"
            onClick={onSortChange}
          >
          Date last run
          </SortableColumn>
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
