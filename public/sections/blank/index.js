import { connect } from 'react-redux';
import { Blank as PresentationComponent } from './blank';
import {
  updateDataplan
} from '../../../../store/actions/datagen_edit';

const mapStateToProps = (state) => {
  // const {
  //   datagenEdit: {
  //     uiState: {
  //       selectedTabId
  //     }
  //   }
  // } = state;

  // return {
  //   selectedTabId
  // };
};

const mapDispatchToProps = (dispatch) => {
  // return {
  //   onChange: (id) => {
  //     dispatch(setTab({ id }));
  //   }
  // };
}

export const Blank = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
