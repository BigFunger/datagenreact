import { connect } from 'react-redux';
import { DatagenTableHeader as PresentationComponent } from './datagen_table_header';
import { datagenListSetSort } from 'plugins/datagenreact/store/actions/datagen_list';

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
      dispatch(datagenListSetSort({ field }));
    }
  };
}

export const DatagenTableHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
