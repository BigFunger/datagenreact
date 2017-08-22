import React from 'react';
import PropTypes from 'prop-types';

export class KuiToolbarFooterSection extends React.Component {
  render = () => {
    const { children } = this.props;

    return (
      <div className="kuiToolBarFooterSection">
        { children }
      </div>
    );
  }

  static propTypes = {
    children: PropTypes.node
  }
}
