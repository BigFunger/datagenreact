import React from 'react';
import PropTypes from 'prop-types';

export class KuiToolbarFooter extends React.Component {
  render = () => {
    const { children } = this.props;

    return (
      <div className="kuiToolBarFooter">
        { children }
      </div>
    );
  }
  
  static propTypes = {
    children: PropTypes.node
  }
}
