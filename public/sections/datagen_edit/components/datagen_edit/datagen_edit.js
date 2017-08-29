import React from 'react';
import PropTypes from 'prop-types';
import {
  KuiPage,
  KuiPageBody
} from 'ui_framework/components';
import { PageHeader } from '../page_header';
import { PageSidebar } from '../page_sidebar';
import { PageContent } from '../page_content';

export class DatagenEdit extends React.Component {
  render = () => {
    const { id } = this.props;

    return (
      <KuiPage>
        <PageHeader />
        <KuiPageBody>
          <PageSidebar />
          <PageContent />
        </KuiPageBody>
      </KuiPage>
    );
  }

  static propTypes = {
    id: PropTypes.string
  }
}