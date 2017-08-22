import { connect } from 'react-redux';
import { DatagenList as PresentationComponent } from './datagen_list';
import { datagenFetchDataplans } from 'plugins/datagenreact/store/actions';

const mapStateToProps = (state) => {
  const { dataplans } = state.datagenList;

  return {
    dataplans
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRefresh: (field) => {
      dispatch(datagenFetchDataplans());
    }
  };
}

export const DatagenList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
