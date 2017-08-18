import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { KuiViewContent } from 'plugins/datagenreact/components';
import { DatagenTable } from '../datagen_table';
import { DatagenTableToolbar } from '../datagen_table_toolbar';

export class DatagenList extends React.Component {
  render = () => {
    const {
      dataplans
    } = this.props;

    return (
      <KuiViewContent>
        <div className="kuiViewContentItem kuiControlledTable kuiVerticalRhythm">
          <DatagenTableToolbar />
          <DatagenTable />
        </div>
      </KuiViewContent>
    );
  }

  static propTypes = {
    dataplans: PropTypes.array
  }
}
