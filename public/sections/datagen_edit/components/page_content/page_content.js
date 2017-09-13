import React from 'react';
import PropTypes from 'prop-types';
import {
  KuiLink,
  KuiTitle,
  KuiPageContent,
  KuiPageContentBody,
  KuiPageContentHeader,
  KuiPageContentHeaderSection,
  KuiSpacer
} from 'ui_framework/components';
import {
  BottomBar,
  Tabs,
  Dataplan,
  Datasources,
  ActionButtons
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
            <KuiLink href="#/management/elasticsearch/datagenreact">
              Data plans
            </KuiLink>
            <KuiTitle>
              <h2>New Data Plan</h2>
            </KuiTitle>
          </KuiPageContentHeaderSection>
          <KuiPageContentHeaderSection>
            <ActionButtons />
          </KuiPageContentHeaderSection>
        </KuiPageContentHeader>
        <KuiPageContentBody>
          <Tabs />
          <KuiSpacer size="l" />
          <CurrentContent />
          <KuiSpacer size="xxl" />
          <BottomBar />
        </KuiPageContentBody>
      </KuiPageContent>
    );
  }

  static propTypes = {
    selectedTabId: PropTypes.string
  }
}