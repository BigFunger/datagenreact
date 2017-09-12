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
  BottomBar,
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