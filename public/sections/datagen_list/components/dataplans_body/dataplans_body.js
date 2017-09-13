import React from 'react';
import PropTypes from 'prop-types';
import {
  KuiLink,
  KuiCheckbox,
  KuiTableBody,
  KuiTableRow,
  KuiTableRowCell,
  KuiTableRowCellCheckbox
} from 'ui_framework/components';

export class DataplansBody extends React.Component {
  render = () => {
    const {
      dataplans
    } = this.props;

    const tableRows = dataplans.map(dataplan => {
      const url = `#/management/elasticsearch/datagenreact/edit/${dataplan.id}`;

      return (
        <KuiTableRow key={dataplan.id}>
          <KuiTableRowCellCheckbox>
            <KuiCheckbox
              id={`${dataplan.id}-checkbox`}
              alternateStyle
            />
          </KuiTableRowCellCheckbox>
          <KuiTableRowCell>
            <KuiLink href={url}>{dataplan.id}</KuiLink>
          </KuiTableRowCell>
          <KuiTableRowCell>
            {dataplan.indexName}
          </KuiTableRowCell>
          <KuiTableRowCell>
            {dataplan.typeName}
          </KuiTableRowCell>
          <KuiTableRowCell>
            {dataplan.dateCreated}
          </KuiTableRowCell>
          <KuiTableRowCell>
            {dataplan.dateLastRun}
          </KuiTableRowCell>
        </KuiTableRow>
      );
    });

    return (
      <KuiTableBody>
        {tableRows}
      </KuiTableBody>
    );
  }

  static propTypes = {
    dataplans: PropTypes.array
  }
}
