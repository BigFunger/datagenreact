import React from 'react';
import PropTypes from 'prop-types';
import {
  KuiPageSideBar
} from 'ui_framework/components';
import {
  DatasourceList
} from '../../components';

export class PageSidebar extends React.Component {
  render = () => {
    const { id } = this.props;

    return (
      <KuiPageSideBar style={{height: '100%'}}>
        <DatasourceList />
      </KuiPageSideBar>
    );
  }

  static propTypes = {
    id: PropTypes.string
  }
}