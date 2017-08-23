import React from 'react';
import PropTypes from 'prop-types';
import { KuiToolbarFooter } from '../../../../components/toolbar_footer';
import { KuiToolbarFooterSection } from '../../../../components/toolbar_footer_section';
import { KuiToolbarFooterText } from '../../../../components/toolbar_footer_text';
import { KuiPagerText } from '../pager_text';
import { KuiPager } from '../pager';

export class Footer extends React.Component {
  render = () => {
    return (
      <KuiToolbarFooter>
        <KuiToolbarFooterSection>
          <KuiToolbarFooterText>5 Items selected</KuiToolbarFooterText>
        </KuiToolbarFooterSection>
        <KuiToolbarFooterSection>
          <KuiToolbarFooterText>
            <KuiPagerText />
          </KuiToolbarFooterText>
          <KuiPager />
        </KuiToolbarFooterSection>
      </KuiToolbarFooter>
    )
  }
}
