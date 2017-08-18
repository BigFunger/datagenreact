import React from 'react';
import PropTypes from 'prop-types';

export class KuiTable extends React.Component {
  render = () => {
    const { children } = this.props;

    return (
      <table className="kuiTable">
        { children }
      </table>
    );
  }
}
