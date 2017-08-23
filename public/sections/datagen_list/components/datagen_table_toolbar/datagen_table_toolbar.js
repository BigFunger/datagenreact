import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { KuiPagerText } from '../pager_text';
import { KuiPager } from '../pager';

export class DatagenTableToolbar extends React.Component {
  render = () => {
    return (
      <div className="kuiToolBar">
        <div className="kuiToolBarSearch">
          {/* <tool-bar-search-box
            filter="watchList.query"
            on-filter="watchList.onQueryChange"
          ></tool-bar-search-box> */}
        </div>

        <div className="kuiToolBarSection">
          <button
            className="kuiButton kuiButton--danger"
            data-test-subj="btnDeleteWatches"
          >
            Delete
          </button>
        </div>

        <div className="kuiToolBarSection">
          <KuiPagerText />
          <KuiPager />
        </div>
      </div>
    );
  }
}
