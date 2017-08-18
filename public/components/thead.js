import React from 'react';
import PropTypes from 'prop-types';

export class KuiThead extends React.Component {
  render = () => {
    const { children } = this.props;

    return (
      <thead>
        { children }
      </thead>
    );
  }
}
