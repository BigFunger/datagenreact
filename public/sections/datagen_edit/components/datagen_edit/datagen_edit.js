import React from 'react';
import PropTypes from 'prop-types';
import {
  KuiPage,
  KuiPageBody
} from 'ui_framework/components';
import { PageContent } from '../../components';

export class DatagenEdit extends React.Component {
  componentWillMount = () => {
    this.props.onLoad();
  }

  render = () => {
    return (
      <KuiPage>
        <KuiPageBody>
          <PageContent />
        </KuiPageBody>
      </KuiPage>
    );
  }
}