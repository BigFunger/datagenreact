import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import {
  KuiTable,
  KuiTableRow
} from 'plugins/datagenreact/components';
import { DatagenTableHeader } from '../datagen_table_header';

export class DatagenTable extends React.Component {
  render = () => {
    const {
      dataplans
    } = this.props;

    return (
      <KuiTable>
        <DatagenTableHeader />
      
        <tbody>
          {dataplans.map(dataplan  => {
            return (
              <KuiTableRow key={dataplan.id}>
                <td className="kuiTableRowCell kuiTableRowCell--checkBox">
                  <div className="kuiTableRowCell__liner">
                    <input type="checkbox" className="kuiCheckBox" />
                  </div>
                </td>
                <td className="kuiTableRowCell">
                  <div className="kuiTableRowCell__liner">
                    <a className="kuiLink" href="#">{dataplan.id}</a>
                  </div>
                </td>
                <td className="kuiTableRowCell">
                  <div className="kuiTableRowCell__liner">
                  <span>{dataplan.indexName}</span>
                  </div>
                </td>
                <td className="kuiTableRowCell">
                  <div className="kuiTableRowCell__liner">
                    <span>{dataplan.typeName}</span>
                  </div>
                </td>
                <td className="kuiTableRowCell">
                  <div className="kuiTableRowCell__liner">
                    <span>{dataplan.dateCreated}</span>
                  </div>
                </td>
                <td className="kuiTableRowCell">
                  <div className="kuiTableRowCell__liner">
                    <span>{dataplan.dateCreated}</span>
                  </div>
                </td>
              </KuiTableRow>
            );
          })}
        </tbody>
      </KuiTable>
    );
  }

  static propTypes = {
    dataplans: PropTypes.array
  }
}
