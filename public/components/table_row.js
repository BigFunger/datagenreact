import React from 'react';
import PropTypes from 'prop-types';

export class KuiTableRow extends React.Component {
  render = () => {
    const { children } = this.props;

    return (
      <tr className="kuiTableRow">
        { children }
      </tr>
    );
  }
}
