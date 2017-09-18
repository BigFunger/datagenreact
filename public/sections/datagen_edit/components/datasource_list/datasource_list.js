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
      currentDatasourceId,
      datasources,
      onDatasourceClicked
    } = this.props;

    const datasourceListItems = datasources.map((datasource) => {
      return (
        <KuiSideNavItem
          key={datasource.id}
          isSelected={datasource.id === currentDatasourceId}
        >
          <button onClick={() => onDatasourceClicked(datasource.id)}>
            {datasource.type}
          </button>
        </KuiSideNavItem>
      );
    });

    return (
      <KuiSideNav
        mobileTitle="Data sources"
        style={{height: '100%'}}
        alternateStyle>
        {datasourceListItems}
      </KuiSideNav>
    );
  }

  static propTypes = {
    currentDatasourceId: PropTypes.string,
    datasources : PropTypes.array,
    onDatasourceClicked: PropTypes.func
  }
}