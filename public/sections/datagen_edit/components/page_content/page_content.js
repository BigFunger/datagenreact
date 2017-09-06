import React from 'react';
import PropTypes from 'prop-types';
import {
  KuiTitle,
  KuiPageContent,
  KuiPageContentBody,
  KuiPageContentHeader,
  KuiPageContentHeaderSection
} from 'ui_framework/components';
import { Datasource } from '../datasource';

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
        <KuiPageContentBody>
          <Datasource />
        </KuiPageContentBody>
      </KuiPageContent>
    );
  }

  static propTypes = {
    id: PropTypes.string
  }
}