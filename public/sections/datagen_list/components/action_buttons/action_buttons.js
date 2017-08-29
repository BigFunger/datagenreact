import React from 'react';
import PropTypes from 'prop-types';
import {
  KuiButton
} from 'ui_framework/components';

export class ActionButtons extends React.Component {
  render = () => {
    return (
      <div>
        <KuiButton>
          New Data plan
        </KuiButton>
      </div>
    )
  }
}
