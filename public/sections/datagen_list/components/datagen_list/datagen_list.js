import React from 'react';
import PropTypes from 'prop-types';
import {
  Dataplans,
  ActionButtons,
  Footer
} from '../../components';

import {
  KuiPage,
  KuiPageHeader,
  KuiPageHeaderSection,
  KuiTitle,
  KuiPageBody,
  KuiPageContent
} from 'ui_framework/components';

export class DatagenList extends React.Component {
  componentWillMount = () => {
    const {
      onRefresh
    } = this.props;
    onRefresh();
  }

  render = () => {
    return (
      <KuiPage>
        <KuiPageHeader>
          <KuiPageHeaderSection>
            <KuiTitle size="large">
              <h1>Data plans</h1>
            </KuiTitle>
          </KuiPageHeaderSection>
          <KuiPageHeaderSection>
            <ActionButtons />
          </KuiPageHeaderSection>
        </KuiPageHeader>
        <KuiPageBody>
          <KuiPageContent>
            <Dataplans />
            <Footer />
          </KuiPageContent>
        </KuiPageBody>
      </KuiPage>
    );
  }

  static propTypes = {
    onRefresh: PropTypes.func
  }
}
