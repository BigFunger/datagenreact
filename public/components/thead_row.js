import React from 'react';
import PropTypes from 'prop-types';

export class KuiTheadRow extends React.Component {
  render = () => {
    const { children } = this.props;

    return (
      <tr>
        { children }
      </tr>
    );
  }
}
