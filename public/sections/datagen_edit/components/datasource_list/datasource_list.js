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

    const listItems = datasources.map((datasource) => {
      //Instead of KuiSideNavItem components, it should be a component that consumes a single datasource.
      //Fix when Dave gives you the selectable list component.
      return (
        <KuiSideNavItem
          key={datasource.id}
        >
          <button onClick={() => onDatasourceClicked(datasource.id)}>
            {datasource.type} ({datasource.field})
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