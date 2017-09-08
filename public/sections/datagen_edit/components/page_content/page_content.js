import React from 'react';
import PropTypes from 'prop-types';
import {
  KuiTitle,
  KuiPageContent,
  KuiPageContentBody,
  KuiPageContentHeader,
  KuiPageContentHeaderSection,
  KuiSpacer
} from 'ui_framework/components';
import {
  Tabs,
  Dataplan,
  Datasources
} from '../../components';

const tabPanels = {
  'datasources': Datasources,
  'dataplan': Dataplan
};

export class PageContent extends React.Component {
  render = () => {
    const { selectedTabId } = this.props;

    const CurrentContent = tabPanels[selectedTabId];

    return (
      <KuiPageContent>
        <KuiPageContentHeader>
          <KuiPageContentHeaderSection>
            <KuiTitle>
              <h2>New Data Plan</h2>
            </KuiTitle>
          </KuiPageContentHeaderSection>
          <KuiPageContentHeaderSection>
            Content abilities
          </KuiPageContentHeaderSection>
        </KuiPageContentHeader>
        <KuiPageContentBody>
          <Tabs />
          <KuiSpacer size="l" />
          <CurrentContent />
        </KuiPageContentBody>
      </KuiPageContent>
    );
  }

  static propTypes = {
    selectedTabId: PropTypes.string
  }
}