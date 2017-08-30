import React from 'react';
import PropTypes from 'prop-types';
import {
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
      return (
        <KuiTableRow key={dataplan.id}>
          <KuiTableRowCellCheckbox>
            <KuiCheckbox
              id={`${dataplan.id}-checkbox`}
              alternateStyle
            />
          </KuiTableRowCellCheckbox>
          <KuiTableRowCell>
            {dataplan.id}
          </KuiTableRowCell>
          <KuiTableRowCell>
            {dataplan.definition.indexName}
          </KuiTableRowCell>
          <KuiTableRowCell>
            {dataplan.definition.typeName}
          </KuiTableRowCell>
          <KuiTableRowCell>
            {dataplan.definition.dateCreated}
          </KuiTableRowCell>
          <KuiTableRowCell>
            {dataplan.definition.dateLastRun}
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
