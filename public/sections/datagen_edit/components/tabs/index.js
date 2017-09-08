import { connect } from 'react-redux';
import { Tabs as PresentationComponent } from './tabs';
import { setTab } from '../../../../store/actions/datagen_edit';

const mapStateToProps = (state) => {
  const {
    datagenEdit: {
      uiState: {
        selectedTabId
      }
    }
  } = state;

  return {
    selectedTabId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (id) => {
      dispatch(setTab({ id }));
    }
  };
}

export const Tabs = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
