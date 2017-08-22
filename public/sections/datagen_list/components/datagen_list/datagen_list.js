import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import {
  KuiViewContent,
  KuiToolbarFooter
} from 'plugins/datagenreact/components';
import { DatagenTable } from '../datagen_table';
import { Footer } from '../footer';
import { DatagenTableToolbar } from '../datagen_table_toolbar';

export class DatagenList extends React.Component {
  componentWillMount = () => {
    const { onRefresh } = this.props;
    onRefresh();
  }

  render = () => {
    const {
      dataplans
    } = this.props;

    return (
      <KuiViewContent>
        <div className="kuiViewContentItem kuiControlledTable kuiVerticalRhythm">
          <DatagenTableToolbar />
          <DatagenTable />
          <Footer />
        </div>
      </KuiViewContent>
    );
  }

  static propTypes = {
    dataplans: PropTypes.array
  }
}
