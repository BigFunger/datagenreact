import React from 'react';
import PropTypes from 'prop-types';
import { KuiViewContent } from '../../../../components/view_content';

export class DatagenEdit extends React.Component {
  render = () => {
    const { id } = this.props;

    return (
      <KuiViewContent>
        <h1>datagen edit { id }</h1>
      </KuiViewContent>
    );
  }

  static propTypes = {
    id: PropTypes.string
  }
}
