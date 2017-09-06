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
    //TODO: Where in the flow does the document get loaded from elasticsearch?
    //on component will load?
    const { id } = this.props;

    return (
      <KuiPage>
        <PageHeader id={id} />
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