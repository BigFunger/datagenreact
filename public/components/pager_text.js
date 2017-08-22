import React from 'react';
import PropTypes from 'prop-types';

export class KuiPagerText extends React.Component {
  render = () => {
    const {
      startItem,
      endItem,
      totalItems
    } = this.props;

    return (
      <div className="kuiPagerText">{startItem}&ndash;{endItem} of {totalItems}</div>
    )
  }
  
  static propTypes = {
    startItem: PropTypes.number,
    endItem: PropTypes.number,
    totalItems: PropTypes.number
  }
}
