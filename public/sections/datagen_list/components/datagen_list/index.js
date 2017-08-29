import { connect } from 'react-redux';
import { DatagenList as PresentationComponent } from './datagen_list';
import { datagenFetchDataplans } from '../../../../store/actions/datagen_list';

const mapStateToProps = (state) => {
  return {};
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
