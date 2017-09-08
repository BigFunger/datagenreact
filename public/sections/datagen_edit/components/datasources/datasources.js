import React from 'react';
import PropTypes from 'prop-types';
import {
  KuiSideNav,
  KuiFlexGroup,
  KuiFlexItem
} from 'ui_framework/components';
import {
  Datasource,
  PageSidebar
} from '../../components';

export class Datasources extends React.Component {
  render = () => {
    const { id } = this.props;

    return (
      <KuiFlexGroup>
        <KuiFlexItem grow={false} style={{width: 200}}>
          <PageSidebar />
        </KuiFlexItem>
        <KuiFlexItem>
          <Datasource />
        </KuiFlexItem>
      </KuiFlexGroup>
    );
  }

  static propTypes = {
    id: PropTypes.string
  }
}