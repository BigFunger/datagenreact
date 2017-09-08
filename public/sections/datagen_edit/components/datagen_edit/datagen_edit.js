import React from 'react';
import PropTypes from 'prop-types';
import {
  KuiPage,
  KuiPageBody
} from 'ui_framework/components';
import { PageContent } from '../../components';

export class DatagenEdit extends React.Component {
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