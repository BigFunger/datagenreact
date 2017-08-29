import React from 'react';
import PropTypes from 'prop-types';
import {
  KuiPageSideBar
} from 'ui_framework/components';

export class PageSidebar extends React.Component {
  render = () => {
    const { id } = this.props;

    return (
      <KuiPageSideBar>
        SideBar nav
      </KuiPageSideBar>
    );
  }

  static propTypes = {
    id: PropTypes.string
  }
}