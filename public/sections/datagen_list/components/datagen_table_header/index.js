import { connect } from 'react-redux';
import { DatagenTableHeader as PresentationComponent } from './datagen_table_header';
import { datagenListSetSort } from 'plugins/datagenreact/store/actions';

const mapStateToProps = (state) => {
  const { 
    sortField,
    sortReverse
  } = state.datagenList;

  return {
    sortField,
    sortReverse
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSortChange: (field) => {
      dispatch(datagenListSetSort({
        field
      }));
      // dispatch({
      //   type: 'DATAGEN_LIST_SET_SORT',
      //   payload: {
      //     field
      //   }
      // });
    }
  };
}

export const DatagenTableHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
