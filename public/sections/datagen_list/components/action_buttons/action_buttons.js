import React from 'react';
import PropTypes from 'prop-types';
import {
  KuiButton
} from 'ui_framework/components';

export class ActionButtons extends React.Component {
  render = () => {
    const {
      onNotify,
      onRefresh,
      onNewDataplan
    } = this.props;

    return (
      <div>
        <KuiButton onClick={onNotify}>
          Test Notifier
        </KuiButton>
        <KuiButton onClick={onRefresh}>
          Refresh List
        </KuiButton>
        <KuiButton onClick={onNewDataplan}>
          New Data plan
        </KuiButton>
      </div>
    )
  }
  
  static propTypes = {
    onNotify: PropTypes.func,
    onRefresh: PropTypes.func,
    onNewDataplan: PropTypes.func
  }
}