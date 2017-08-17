import { connect } from 'react-redux';
import { DatagenList as PresentationComponent } from './datagen_list';

const mapStateToProps = (state) => {
  const { totalDataplans } = state.otherState;

  return {
    totalDataplans
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddClick: () => {
      dispatch({
        type: 'ADD_DATAPLAN',
        name: 'foobar'
      });
    }
  }
}

export const DatagenList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
