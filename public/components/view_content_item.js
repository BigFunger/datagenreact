import React from 'react';
import PropTypes from 'prop-types';

export class KuiViewContent extends React.Component {
  render = () => {
    const { children } = this.props;

    return (
      <div className="kuiViewContent kuiViewContent--constrainedWidth">
        { children }
      </div>
    );
  }
}
