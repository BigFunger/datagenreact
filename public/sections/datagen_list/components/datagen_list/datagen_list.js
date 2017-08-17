import React from 'react';
import PropTypes from 'prop-types';

export class DatagenList extends React.Component {
  render = () => {
    const {
      totalDataplans,
      onAddClick
    } = this.props;

    return (
      <div>
        <h1>I am the datagen list!</h1>
        <h2>{ totalDataplans }</h2>
        <button onClick={ onAddClick }>Click me to increment the counter</button>
      </div>
    );
  }

  static propTypes = {
    totalDataplans: PropTypes.number
  }
}
