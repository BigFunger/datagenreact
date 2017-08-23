import React from 'react';
import PropTypes from 'prop-types';
import { KuiViewContent } from '../../../../components/view_content';
import { DatagenTable } from '../datagen_table';
import { Footer } from '../footer';
import { DatagenTableToolbar } from '../datagen_table_toolbar';

export class DatagenList extends React.Component {
  componentWillMount = () => {
    const { onRefresh } = this.props;
    onRefresh();
  }

  render = () => {
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
    onRefresh: PropTypes.func
  }
}
