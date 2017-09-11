import { connect } from 'react-redux';
import { BottomBar as PresentationComponent } from './bottom_bar';
import {
  save,
  discard
} from '../../../../store/actions/datagen_edit';

const mapStateToProps = (state) => {
  const { 
    datagenEdit: {
      uiState: {
        bottomBarVisible
      }
    }
  } = state;

  return {
    bottomBarVisible
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSave: () => {
      dispatch(save());
    },
    onDiscard: () => {
      dispatch(discard());
    }
  };
}

export const BottomBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
