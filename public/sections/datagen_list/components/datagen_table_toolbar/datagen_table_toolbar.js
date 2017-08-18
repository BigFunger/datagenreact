import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

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
          {/* <tool-bar-pager-text
            start-item="watchList.pager.startItem"
            end-item="watchList.pager.endItem"
            total-items="watchList.pager.totalItems"
          ></tool-bar-pager-text>
          <tool-bar-pager-buttons
            has-previous-page="watchList.pager.hasPreviousPage"
            has-next-page="watchList.pager.hasNextPage"
            on-page-next="watchList.onPageNext"
            on-page-previous="watchList.onPagePrevious"
          ></tool-bar-pager-buttons> */}
        </div>
      </div>
    );
  }
}
