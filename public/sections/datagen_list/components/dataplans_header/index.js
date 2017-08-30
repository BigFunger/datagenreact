import { connect } from 'react-redux';
import { DataplansHeader as PresentationComponent } from './dataplans_header';
import { datagenListSetSort } from '../../../../store/actions/datagen_list';

const mapStateToProps = (state) => {
  const {
    datagenList: {
      uiState: {
        sortField,
        sortReverse
      }
    }
  } = state;

  return {
    sortField,
    sortReverse
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSort: (field) => {
      dispatch(datagenListSetSort({ field }));
    }
  };
}

export const DataplansHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
