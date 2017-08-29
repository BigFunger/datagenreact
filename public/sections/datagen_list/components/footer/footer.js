import React from 'react';
import PropTypes from 'prop-types';
import {
  KuiFlexGroup,
  KuiFlexItem,
  KuiText,
  KuiPagination
} from 'ui_framework/components';

export class Footer extends React.Component {
  render = () => {
    const {
      totalRecords,
      pageNumber,
      totalPages,
      requestDuration,
      goToPage
    } = this.props;

    return (
      <KuiFlexGroup
        justifyContent="spaceBetween"
        alignItems="center"
      >
        <KuiFlexItem grow={false}>
          <KuiText size="small"><p>{totalRecords} results, returned in {requestDuration} ms.</p></KuiText>
        </KuiFlexItem>
        <KuiFlexItem grow={false}>
          <KuiPagination
            pageCount={totalPages}
            activePage={pageNumber}
            onPageClick={goToPage}
          />
        </KuiFlexItem>
      </KuiFlexGroup>
    )
  }
  
  static propTypes = {
    totalRecords: PropTypes.number,
    pageNumber: PropTypes.number,
    totalPages: PropTypes.number,
    requestDuration: PropTypes.string,
    goToPage: PropTypes.func
  }
}