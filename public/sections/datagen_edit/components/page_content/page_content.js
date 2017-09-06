import React from 'react';
import PropTypes from 'prop-types';
import {
  KuiTitle,
  KuiPageContent,
  KuiPageContentBody,
  KuiPageContentHeader,
  KuiPageContentHeaderSection
} from 'ui_framework/components';
import { TextDatasourceContentBody } from '../text_datasource_content_body';

export class PageContent extends React.Component {
  render = () => {
    const { id } = this.props;

    return (
      <KuiPageContent>
        <KuiPageContentHeader>
          <KuiPageContentHeaderSection>
            <KuiTitle>
              <h2>Content title { id }</h2>
            </KuiTitle>
          </KuiPageContentHeaderSection>
          <KuiPageContentHeaderSection>
            Content abilities
          </KuiPageContentHeaderSection>
        </KuiPageContentHeader>
        <TextDatasourceContentBody />
      </KuiPageContent>
    );
  }

  static propTypes = {
    id: PropTypes.string
  }
}