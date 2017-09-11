import { connect } from 'react-redux';
import { Dataplan as PresentationComponent } from './dataplan';
import {
  updateDataplan
} from '../../../../store/actions/datagen_edit';

const mapStateToProps = (state) => {
  const {
    datagenEdit: {
      dataplan
    }
  } = state;
  
  return {
    ...dataplan
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (dataplan) => {
      dispatch(updateDataplan({dataplan}));
    }
  };
}

export const Dataplan = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);