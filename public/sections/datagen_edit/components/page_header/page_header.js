import React from 'react';
import PropTypes from 'prop-types';
import {
  KuiPageHeader,
  KuiPageHeaderSection,
  KuiTitle,
} from 'ui_framework/components';

export class PageHeader extends React.Component {
  render = () => {
    const { id } = this.props;

    return (
      <KuiPageHeader>
        <KuiPageHeaderSection>
          <KuiTitle size="large">
            <h1>Page title {id}</h1>
          </KuiTitle>
        </KuiPageHeaderSection>
        <KuiPageHeaderSection>
          Page abilities
        </KuiPageHeaderSection>
      </KuiPageHeader>
    );
  }

  static propTypes = {
    id: PropTypes.string
  }
}