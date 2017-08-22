import { connect } from 'react-redux';
import { KuiPager as PresentationComponent } from 'plugins/datagenreact/components';
import { datagenListPreviousPage, datagenListNextPage } from 'plugins/datagenreact/store/actions';

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
    prevDisabled
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPreviousPage: () => {
      dispatch(datagenListPreviousPage());
    },
    onNextPage: () => {
      dispatch(datagenListNextPage());
    }
  };
}

export const KuiPager = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
