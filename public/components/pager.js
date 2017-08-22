import React from 'react';
import PropTypes from 'prop-types';

export class KuiPager extends React.Component {
  render = () => {
    const {
      nextDisabled,
      prevDisabled,
      onPreviousPage,
      onNextPage
    } = this.props;

    return (
      <div className="kuiPager">
        <div className="kuiButtonGroup kuiButtonGroup--united">
          <button
            className="kuiButton kuiButton--basic kuiButton--iconText"
            aria-label="Show previous page"
            onClick={() => { onPreviousPage() }}
          >
            <span className="kuiButton__inner">
              <span
                aria-hidden="true"
                className="kuiButton__icon kuiIcon fa-chevron-left"
              ></span>
            </span>
          </button>
          <button
            className="kuiButton kuiButton--basic kuiButton--iconText"
            aria-label="Show next page"
            data-test-subj="pagerNextButton"
            onClick={() => { onNextPage() }}
          >
            <span className="kuiButton__inner">
              <span
                aria-hidden="true"
                className="kuiButton__icon kuiIcon fa-chevron-right"
              ></span>
            </span>
          </button>
        </div>
      </div>
    );
  }
  
  static propTypes = {
    onPreviousPage: PropTypes.func,
    onNextPage: PropTypes.func
  }
}
