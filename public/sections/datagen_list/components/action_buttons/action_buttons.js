import React from 'react';
import PropTypes from 'prop-types';
import {
  KuiButton
} from 'ui_framework/components';

export class ActionButtons extends React.Component {
  render = () => {
    const {
      onRefresh,
      onNewDataplan
    } = this.props;

    return (
      <div>
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
    onRefresh: PropTypes.func,
    onNewDataplan: PropTypes.func
  }
}
