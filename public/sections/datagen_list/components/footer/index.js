import { connect } from 'react-redux';
import moment from 'moment';
import { Footer as PresentationComponent } from './footer';
import { datagenListSetPage } from '../../../../store/actions/datagen_list';

const mapStateToProps = (state) => {
  const {
    datagenList: {
      dataplans: {
        allIds
      },
      uiState: {
        pageSize,
        pageNumber,
        requestStart,
        requestEnd
      }
    }
  } = state;

  const totalRecords = allIds.length;
  const totalPages = Math.ceil(totalRecords / pageSize);
  const requestDuration = moment.duration(moment(requestEnd).diff(moment(requestStart)));

  return {
    totalRecords,
    pageNumber,
    totalPages,
    requestDuration
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    goToPage: (page) => {
      dispatch(datagenListSetPage({ pageNumber: page }));
    }
  };
}

export const Footer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
