import React from 'react';
import PropTypes from 'prop-types';
import {
  KuiTabs,
  KuiTab
} from 'ui_framework/components';

const tabs = [{
  id: 'dataplan',
  name: 'Edit plan',
}, {
  id: 'datasources',
  name: 'Data sources',
}];

export class Tabs extends React.Component {
  renderTabs() {
    const {
      selectedTabId,
      onChange
    } = this.props;

    return tabs.map((tab, index) => (
      <KuiTab
        onClick={() => onChange(tab.id)}
        isSelected={tab.id === selectedTabId}
        key={index}
      >
        {tab.name}
      </KuiTab>
    ));
  }

  render = () => {
    const { text } = this.props;

    return (
      <KuiTabs>
        {this.renderTabs()}
      </KuiTabs>
    );
  }

  static propTypes = {
    selectedTabId: PropTypes.string,
    onChange: PropTypes.func
  }
}