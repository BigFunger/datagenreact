import React from 'react';
import PropTypes from 'prop-types';
import {
  KuiButton
} from 'ui_framework/components';

export class ActionButtons extends React.Component {
  render = () => {
    const {
      onGenerate
    } = this.props;

    return (
      <div>
        <KuiButton onClick={onGenerate}>
          Generate data
        </KuiButton>
      </div>
    )
  }
  
  static propTypes = {
    onGenerate: PropTypes.func
  }
}
