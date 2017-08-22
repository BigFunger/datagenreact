import React from 'react';
import PropTypes from 'prop-types';

export class KuiToolbarFooterText extends React.Component {
  render = () => {
    const { children } = this.props;

    return (
      <div className="kuiToolBarText">
        { children }
      </div>
    );
  }
  
  static propTypes = {
    children: PropTypes.node
  }
}
