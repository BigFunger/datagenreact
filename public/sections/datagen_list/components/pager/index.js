import { connect } from 'react-redux';
import { KuiPager as PresentationComponent } from 'plugins/datagenreact/components';
import { datagenListSetPage } from 'plugins/datagenreact/store/actions';

const mapStateToProps = (state) => {
  const {
    dataplans,
    pageSize,
    pageNumber
  } = state.datagenList;

  const totalPages = Math.ceil(dataplans.length / pageSize);
  const nextDisabled = pageNumber < totalPages;
  const prevDisabled = pageNumber > 0;

  return {
    nextDisabled,
    prevDisabled,
    pageNumber
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPreviousPage: (pageNumber) => () => {
      dispatch(datagenListSetPage({ pageNumber }));
    },
    onNextPage: (pageNumber) => () => {
      dispatch(datagenListSetPage({ pageNumber }));
    }
  };
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    onPreviousPage: dispatchProps.onPreviousPage(stateProps.pageNumber - 1),
    onNextPage: dispatchProps.onNextPage(stateProps.pageNumber + 1)
  }
}

export const KuiPager = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(PresentationComponent);
