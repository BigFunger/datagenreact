import React from 'react';
import PropTypes from 'prop-types';
import {
  KuiTab
} from 'ui_framework/components';

export class Blank extends React.Component {
  render = () => {
    const { text } = this.props;

    return (
      <div>
      </div>
    );
  }

  static propTypes = {
    selectedTabId: PropTypes.string
  }
}