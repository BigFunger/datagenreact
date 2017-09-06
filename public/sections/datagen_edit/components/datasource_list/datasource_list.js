import React from 'react';
import PropTypes from 'prop-types';
import {
  KuiSideNav,
  KuiSideNavItem,
  KuiSideNavTitle,
} from 'ui_framework/components';

export class DatasourceList extends React.Component {
  render = () => {
    const {
      datasources,
      onDatasourceClicked
    } = this.props;

    const listItems = datasources.map((datasource, id) => {
      return (
        <KuiSideNavItem
          key={id}
        >
          <button onClick={() => onDatasourceClicked(id)}>
            {datasource.type} ({id})
          </button>
        </KuiSideNavItem>
      );
    });

    return (
      <KuiSideNav>
        <KuiSideNavTitle>Datasources</KuiSideNavTitle>
        {listItems}
      </KuiSideNav>
    );
  }

  static propTypes = {
    datasources : PropTypes.array,
    onDatasourceClicked: PropTypes.func
  }
}