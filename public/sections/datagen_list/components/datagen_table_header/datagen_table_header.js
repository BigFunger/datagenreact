import React from 'react';
import moment from 'moment';
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
      sortField: 'id',
      sortReverse: false
    }
  }

  render = () => {
    const onClick = (field) => {
      console.log(`${field} clicked!`);
    }

    return (
      <KuiThead>
        <KuiTheadRow>
          <th className="kuiTableHeaderCell kuiTableHeaderCell--checkBox">
            <input type="checkbox" className="kuiCheckBox" />
          </th>
          <SortableColumn
            field="id"
            onClick={onClick}
          >
            Id
          </SortableColumn>
          <SortableColumn
            field="indexName"
            onClick={onClick}
          >
          Index Name
          </SortableColumn>
          <SortableColumn
            field="typeName"
            onClick={onClick}
          >
          Type Name
          </SortableColumn>
          <SortableColumn
            field="dateCreated"
            onClick={onClick}
          >
          Date created
          </SortableColumn>
          <SortableColumn
            field="dateLastRun"
            onClick={onClick}
          >
          Date last run
          </SortableColumn>
        </KuiTheadRow>
      </KuiThead>
    );
  }

  static propTypes = {
    dataplans: PropTypes.array
  }

  static childContextTypes = {
    sortField: PropTypes.string,
    sortReverse: PropTypes.bool
  }
}
