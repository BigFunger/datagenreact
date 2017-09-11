import React from 'react';
import PropTypes from 'prop-types';
import {
  KuiToast
} from 'ui_framework/components';

export class Toast extends React.Component {
  render = () => {
    return (
      <KuiToast
        title="Success"
        type="success"
        iconType="user"
      >
        <p>
          Changes saved successfully!
        </p>
      </KuiToast>
    );
  }
}